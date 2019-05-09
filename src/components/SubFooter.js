import React from 'react';

const SubFooter = () => (
  <div className="container mb-3 mt-auto">
    <div className="row align-items-center">
      <div className="col-sm-12 col-md-12 col-lg-4 mb-4">
        <h4>Need Support?</h4>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <a className="card contact-card" href="mailto:support@vuukle.com">
          <div className="card-body d-flex align-items-center">
            <div className="contact-card__item-icon">
              <img src="/contact-mail.svg" alt="Mail" />
            </div>
            <div className="contact-card_item-description">
              <span>Write to us</span>
              <span>support@vuukle.com</span>
            </div>
          </div>
        </a>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <a href="tel:+1 209 732 0020" className="card contact-card">
          <div className="card-body d-flex align-items-center">
            <div className="contact-card__item-icon">
              <img src="/contact-phone.svg" alt="Mail" />
            </div>
            <div className="contact-card_item-description">
              <span>Call us</span>
              <span>+1 209 732 0020</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
);

export default SubFooter;
