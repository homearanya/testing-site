import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const BreadCrumbs = ({ breadcrumbs }) => {
  const list = [{ name: 'Home', link: '/' }, ...breadcrumbs];

  return (
    <ol className="breadcrumb">
      {list.map((item, i) => {
        if (i === list.length - 1) {
          return (
            <li className="breadcrumb-item active" key={item.name}>
              <span>{item.name}</span>
            </li>
          );
        }
        return (
          <li className="breadcrumb-item" key={item.name}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        );
      })}
    </ol>
  );
};

BreadCrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BreadCrumbs;
