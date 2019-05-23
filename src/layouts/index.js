import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import vuukleLogo from './vuukle-logo.svg';
import SearchResults from '../components/SearchResults';

// Styles
import '../styles/index.scss';

class TemplateWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      navbarCollapsed: true,
    };
    // Binds
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(searchValue) {
    return this.setState({ searchValue });
  }

  render() {
    const { navbarCollapsed, searchValue } = this.state;
    const { children } = this.props;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 50,
        }}
      >
        <Helmet
          title="Vuukle Docs"
          meta={[
            {
              name: 'description',
              content: 'Need help with Vuukle?🤔 This is the place you are looking for! Advice and answers from the Vuukle Team.',
            },
            { name: 'keywords', content: 'vuukle, documentation, tutorial, help' },
          ]}
        />
        <Navbar fixed="top" light style={{ background: '#fff', boxShadow: '0 3px 4px rgba(0,0,0,.1)' }} expand="md">
          <div className="container">
            <NavbarBrand className="d-flex align-items-center">
              <Link to="/">
                <div>
                  <img src={vuukleLogo} alt="Vuukle" width="80px" />
                </div>
              </Link>
              <span className="badge badge-primary ml-2">Help Center</span>
            </NavbarBrand>
            <NavbarToggler onClick={() => this.setState({ navbarCollapsed: !navbarCollapsed })} />
            <Collapse isOpen={!navbarCollapsed} className="navbar-collapse">
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://vuukle.com">Go to Vuukle</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://blog.vuukle.com/">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://vuukle.com/admin">Admin</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Header handleSearchChange={this.handleSearchChange} searchValue={searchValue} />
        <div style={{ marginBottom: '50px' }}>
          {searchValue.trim().length > 2 ? <SearchResults searchValue={searchValue} clearSearch={() => this.handleSearchChange('')} /> : children}
        </div>
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.object.isRequired,
};

export default TemplateWrapper;
