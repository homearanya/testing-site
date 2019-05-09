import React from 'react';

const Footer = () => {
  const companyYears = `2012-${new Date().getFullYear()}`;

  return (
    <footer className="footer">
      <nav>
        <a href="https://docs.vuukle.com/privacy-and-policy/" target="_blank" title="Privacy policy, link opens in a new window">
          Privacy
        </a>
        <a href="https://docs.vuukle.com/privacy-and-policy/" target="_blank" title="Site terms of service, link opens in a new window">
          Terms of service
        </a>
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
