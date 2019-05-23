import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import ReadMoreLink from '../components/ReadMoreLink';

export const CategoryTemplate = ({ item }) => {
  return (
    <div key={item.name} className="card mb-4">
      <div className="card-block row">
        <div className="col-sm-2 categories-list-image-wrapper">
          <img src={item.icon} alt={item.title} />
        </div>
        <div className="col-sm-10">
          <h2 className="h4">
            <Link to={item.path}>{item.title}</Link>
          </h2>
          {item.description ? <p>{item.description}</p> : null}
          <ReadMoreLink to={item.path}>Check Guides</ReadMoreLink>
        </div>
      </div>
    </div>
  );
};

const CategoriesListTemplate = ({ data }) => {
  const { edges: categories } = data.allMarkdownRemark;
  const sortedCategories = categories.sort((a, b) => {
    const { displayOrder: orderA } = a.node.frontmatter;
    const { displayOrder: orderB } = b.node.frontmatter;
    return orderA - orderB;
  });
  return (
    <div className="container content-container" style={{ marginTop: '40px' }}>
      <Helmet title="Vuukle Categories" />
      {sortedCategories.map(item => {
        const { frontmatter: category, fields, id } = item.node;
        category.path = fields.slug;
        if (!category.icon.childImageSharp || category.icon.extension === 'svg') {
          category.icon = category.icon.publicURL || category.icon;
        } else {
          category.icon = category.icon.childImageSharp.fluid.src;
        }
        return <CategoryTemplate item={category} key={id} />;
      })}
    </div>
  );
};
// const CategoriesListTemplate = ({ data }) => {
//   const { categories } = pageContext;
//   const sortedCategories = categories.sort((a, b) => a.displayOrder - b.displayOrder);

//   return (
//     <div className="container content-container" style={{ marginTop: '40px' }}>
//       <Helmet title="Vuukle Categories" />
//       {sortedCategories.map(item => (
//         <CategoryTemplate item={item} />
//       ))}
//     </div>
//   );
// };

// CategoriesListTemplate.propTypes = {
//   pageContext: PropTypes.shape({
//     categories: PropTypes.arrayOf(
//       PropTypes.shape({
//         path: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         description: PropTypes.string,
//       })
//     ),
//   }).isRequired,
// };

export default CategoriesListTemplate;

export const categoriesQuery = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src/content/categories/" } }) {
      # allMarkdownRemark{
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            displayOrder
            title
            description
            icon {
              childImageSharp {
                fluid {
                  src
                }
              }
              publicURL
              extension
            }
          }
        }
      }
    }
  }
`;
