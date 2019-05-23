import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const companyYears = `2012-${new Date().getFullYear()}`;

  return (
    <footer className="footer">
      <nav>
        <Link to="/privacy-and-policy/">
          Privacy
        </Link>
        <Link to="/privacy-and-policy/">
          Terms of service
        </Link>
        <a href="mailto:support@vuukle.com">Support</a>
      </nav>
      <p>
        <span role="img" aria-label="copyright">
          ©
          {' '}
        </span>
        <span>{companyYears}</span>
        <span> Vuukle. All rights reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
