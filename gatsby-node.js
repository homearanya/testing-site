const Promise = require('bluebird'); // eslint-disable-line
const path = require('path');
const fs = require('fs');
const slug = require('slug');

const categoriesInfo = require('./src/categories.json');

let searchArticles = [];

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  let categoryPath = '';
  let tagsWithPaths = [];

  if (node.internal.type === 'MarkdownRemark') {
    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter') && Object.prototype.hasOwnProperty.call(node.frontmatter, 'category')) {
      categoryPath = slug(node.frontmatter.category);
    }
    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter') && Object.prototype.hasOwnProperty.call(node.frontmatter, 'tags')) {
      tagsWithPaths = node.frontmatter.tags.map(item => ({
        name: item,
        path: slug(item),
      }));
    }
  }

  createNodeField({ node, name: 'categoryPath', value: categoryPath });
  createNodeField({ node, name: 'tagsWithPaths', value: tagsWithPaths });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  // [START] NEW Articles Promise
  return new Promise((resolve, reject) => {
    // Post Template
    const postPage = path.resolve('./src/templates/blog-post.js');
    // Category Template
    const categyPage = path.resolve('./src/templates/category.js');
    // Tag Template
    const tagPage = path.resolve('./src/templates/tag.js');
    // Categories List Template
    const categoriesListPage = path.resolve('./src/templates/categories-list.js');

    resolve(
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                id
                html
                frontmatter {
                  path
                  category
                  tags
                  title
                  shortDescription
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        // No errors -> go thought posts
        const categorySet = new Set();
        const tagsSet = new Set();
        // Add articles for search
        searchArticles = result.data.allMarkdownRemark.edges;
        fs.writeFile('./static/search-data.json', JSON.stringify(searchArticles), err => {
          if (err) return console.log('Creating searchData.js error: ', err);
          return console.log('searchData.js creating successful');
        });

        result.data.allMarkdownRemark.edges.forEach(edge => {
          const id = edge.node.id;
          if (edge.node.frontmatter.category) {
            categorySet.add(edge.node.frontmatter.category);
          }
          if (Array.isArray(edge.node.frontmatter.tags) && edge.node.frontmatter.tags.length > 0) {
            // We will not add checking if tag is already there because 'Set' stores only unique items
            // more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
            edge.node.frontmatter.tags.forEach(tag => tagsSet.add(tag));
          }

          createPage({
            path: edge.node.frontmatter.path,
            component: postPage,
            context: {
              id,
            },
          });
        });

        // Create Category Pages
        const categoryList = Array.from(categorySet);
        const categoryWithPath = categoryList.map(category => {
          let categoryInfo = {};
          if (Object.prototype.hasOwnProperty.call(categoriesInfo, category)) categoryInfo = categoriesInfo[category];
          return Object.assign(
            {
              name: category,
              path: `/categories/${slug(category.toLowerCase())}/`,
            },
            categoryInfo
          );
        });
        // 1. Page with categories list
        createPage({
          path: '/',
          component: categoriesListPage,
          context: {
            categories: categoryWithPath,
          },
        });
        // 2. Create page for each category
        categoryList.forEach(category =>
          createPage({
            path: `/categories/${slug(category.toLowerCase())}/`,
            component: categyPage,
            context: {
              category,
            },
          })
        );

        // Create Tag Pages
        const tagsList = Array.from(tagsSet);
        // Create page for each tag
        tagsList.forEach(tag =>
          createPage({
            path: `/tags/${slug(tag)}/`,
            component: tagPage,
            context: {
              tagRegex: `/${tag}/`,
              tag,
            },
          })
        );
      })
    );
    // [END] NEW Articles Promise
  });
};

// Add slashes to pages if needed
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const formatURL = url => {
    if (typeof url !== 'string') return url;
    if (url.lastIndexOf('/') === url.length - 1) return url;
    return `${url}/`;
  };
  return new Promise(resolve => {
    // Remove trailing slash
    const newPage = Object.assign({}, page, {
      path: page.path === '/' ? page.path : formatURL(page.path),
    });

    if (newPage.path !== page.path) {
      // Remove the old page
      deletePage(page);
      // Add the new page
      createPage(newPage);
    }

    resolve();
  });
};
