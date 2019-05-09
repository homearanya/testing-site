import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import ReadMoreLink from '../components/ReadMoreLink';

const CategoriesListTemplate = ({ pageContext }) => {
  const { categories } = pageContext;
  const sortedCategories = categories.sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <div className="container content-container" style={{ marginTop: '40px' }}>
      <Helmet title="Vuukle Categories" />
      {sortedCategories.map(item => (
        <div key={item.name} className="card mb-4">
          <div className="card-block row">
            <div className="col-sm-2 categories-list-image-wrapper">
              <img src={item.icon} alt={item.name} />
            </div>
            <div className="col-sm-10">
              <h2 className="h4">
                <Link to={item.path}>{item.name}</Link>
              </h2>
              {item.description ? <p>{item.description}</p> : null}
              <ReadMoreLink to={item.path}>Check Guides</ReadMoreLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

CategoriesListTemplate.propTypes = {
  pageContext: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default CategoriesListTemplate;
