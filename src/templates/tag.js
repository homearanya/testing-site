import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import ReadMoreLink from '../components/ReadMoreLink';
import Breadcrumbs from '../components/Breadcrumbs';

class TagTemplate extends React.PureComponent {
  render() {
    const {
      pageContext: { tag },
      data: {
        allMarkdownRemark: { edges },
      },
    } = this.props;

    return (
      <div className="container content-container">
        <Helmet title={`Posts in category "${tag}"`} />
        <Breadcrumbs
          breadcrumbs={[
            {
              name: (
                <span>
                  Tag: <span className="article-tag">{tag}</span>
                </span>
              ),
              link: '',
            },
          ]}
        />
        {edges.map(({ node }) => (
          <div key={node.frontmatter.path} className="card mb-5">
            <div className="card-block">
              <h2 className="h2 title mb-3">
                <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              </h2>
              <p>{node.frontmatter.shortDescription}</p>
              <div style={{ marginBottom: '20px' }}>
                {node.fields.tagsWithPaths.map(item => (
                  <Link key={item.name} to={`/tags/${item.path}/`} className="article-tag">
                    {item.name}
                  </Link>
                ))}
              </div>
              <ReadMoreLink to={node.frontmatter.path}>Go to Article</ReadMoreLink>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      fields: PropTypes.shape({
        tagsWithPaths: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            path: PropTypes.string,
          })
        ),
      }),
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          frontmatter: PropTypes.shape({
            tags: PropTypes.arrayOf(PropTypes.string),
            category: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default TagTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query($tagRegex: String) {
    allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }, filter: { frontmatter: { tags: { regex: $tagRegex } } }) {
      totalCount
      edges {
        node {
          fields {
            tagsWithPaths {
              name
              path
            }
          }
          frontmatter {
            path
            title
            tags
            date(formatString: "MMMM DD, YYYY")
            shortDescription
          }
        }
      }
    }
  }
`;
