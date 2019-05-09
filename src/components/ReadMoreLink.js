import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ReadMoreLink = ({ children, ...props }) => (
  <Link {...props} className="readmore-link">
    {children}
    <svg width="13" height="11" viewBox="0 0 13 11" xmlns="http://www.w3.org/2000/svg" className="readmore-link__icon">
      <path d="M7.556 0L6.42 1.137 9.91 4.63H0v1.626h9.912L6.42 9.75l1.136 1.137L13 5.444" fill="currentColor" fillRule="evenodd" />
    </svg>
  </Link>
);

ReadMoreLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

ReadMoreLink.defaultProps = {
  children: 'Read More',
};

export default ReadMoreLink;
