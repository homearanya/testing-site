import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Breadcrumbs from '../components/Breadcrumbs';
import articleUpdateTime from '../utils/articleUpdateTime';

class BlogPostTemplate extends React.PureComponent {
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
              link: `/categories/${post.fields.categoryPath}/`,
            },
            { name: `${post.frontmatter.title}`, link: '#' },
          ]}
        />
        <div className="card article-card post">
          <div className="card-block">
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontWeight: 'bold' }}>{post.frontmatter.title}</h1>
              <span style={{ display: 'block', marginBottom: '10px' }}>
                {post.fields.tagsWithPaths.map(item => (
                  <Link className="article-tag" to={`/tags/${item.path}/`} key={item.name}>
                    {item.name}
                  </Link>
                ))}
              </span>
              <p style={{ color: '#8fa1b3' }}>{lastUpdate}</p>
            </div>
            {/* <span>category: <Link to={`/categories/${post.frontmatter.category}`}>{post.frontmatter.category}</Link></span> */}
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </div>
    );
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        tags: PropTypes.arrayOf(PropTypes.string),
        category: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default BlogPostTemplate;

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
      fields {
        categoryPath
        tagsWithPaths {
          name
          path
        }
      }
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
