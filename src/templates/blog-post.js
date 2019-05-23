import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import { slugify } from '../utils/slugify';

import Breadcrumbs from '../components/Breadcrumbs';
import articleUpdateTime from '../utils/articleUpdateTime';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({ content, contentComponent, tags, title, lastUpdate }) => {
  const PostContent = contentComponent || Content;
  return (
    <div className="card article-card post">
      <div className="card-block">
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontWeight: 'bold' }}>{title}</h1>
          <span style={{ display: 'block', marginBottom: '10px' }}>
            {tags.map(tag => (
              <Link className="article-tag" to={`/tags/${slugify(tag)}/`} key={tag}>
                {tag}
              </Link>
            ))}
          </span>
          <p style={{ color: '#8fa1b3' }}>{lastUpdate}</p>
        </div>
        {/* <span>category: <Link to={`/categories/${post.frontmatter.category}`}>{post.frontmatter.category}</Link></span> */}
        <PostContent content={content} />
      </div>
    </div>
  );
};

class BlogPostPageTemplate extends React.PureComponent {
  render() {
    const { data } = this.props;
    const post = data.markdownRemark;
    const siteTitle = get(data, 'site.siteMetadata.title');
    const lastUpdate = articleUpdateTime(post.frontmatter.date);

    return (
      <div className="container" style={{ marginTop: '20px' }}>
        <Helmet
          title={`${post.frontmatter.title} | ${siteTitle}`}
          meta={[
            {
              name: 'description',
              content:
                post.frontmatter.shortDescription ||
                'Need help with Vuukle?🤔 This is the place you are looking for! Advice and answers from the Vuukle Team.',
            },
            { name: 'keywords', content: (Array.isArray(post.frontmatter.tags) && post.frontmatter.tags.join(',')) || '' },
          ]}
        />
        <Breadcrumbs
          breadcrumbs={[
            {
              name: `${post.frontmatter.category}`,
              link: `/categories/${slugify(post.frontmatter.category)}/`,
            },
            { name: `${post.frontmatter.title}`, link: '#' },
          ]}
        />
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
          lastUpdate={lastUpdate}
        />
      </div>
    );
  }
}

// BlogPostPageTemplate.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.shape({
//         tags: PropTypes.arrayOf(PropTypes.string),
//         category: PropTypes.string,
//         title: PropTypes.string,
//         date: PropTypes.string,
//       }),
//     }),
//   }).isRequired,
// };

export default BlogPostPageTemplate;

// TODO: get category path
export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        category
        tags
        shortDescription
      }
    }
  }
`;
// export const pageQuery = graphql`
//   query($id: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     markdownRemark(id: { eq: $id }) {
//       id
//       html
//       fields {
//         categoryPath
//         tagsWithPaths {
//           name
//           path
//         }
//       }
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         category
//         tags
//         shortDescription
//       }
//     }
//   }
// `;
