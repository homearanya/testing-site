import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <div className="container text-center">
    <div className="not-found-message">
      <h1>404</h1>
      <div>
        <h2>This page could not be found.</h2>
      </div>
    </div>
    <Link to="/">Return to home</Link>
  </div>
);

export default NotFoundPage;
