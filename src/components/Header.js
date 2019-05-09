import React from 'react';
import PropTypes from 'prop-types';

const HeaderComponent = ({ searchValue, handleSearchChange }) => {
  const handleInputChange = (e) => {
    handleSearchChange(e.target.value);
    /* if (window.location.pathname.match(/search/)) {
      push(`/search?${e.target.value}`);
      // window.history.pushState({}, document.title, `/search?${e.target.value}`);
    } else {
      window.location.replace(`/search?${e.target.value}`);
    } */
  };
  return (
    <div className="header">
      <div className="container">
        {/* <h1>Advice and answers from the Vuukle Team</h1> */}
        <div className="text-center">
          <h1>
            Need help with Vuukle?
            <span role="img" aria-label="hmm">
              🤔
            </span>
          </h1>
          <h3>This is the place you are looking for!</h3>
        </div>
        <div autoComplete="off" className="header__form search js__search">
          <input
            type="text"
            autoComplete="off"
            id="searchBox"
            value={searchValue}
            placeholder="Search for answers..."
            onChange={handleInputChange}
          />
          <button type="submit" className="search__submit o__ltr" />
        </div>
      </div>
    </div>
  );
};

HeaderComponent.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default HeaderComponent;
