import React from 'react';
import PropTypes from 'prop-types';


// Components
import NavItem from './NavItem';

const NavDropdown = ({ title, children, ...props }) => (
  <NavItem dropdown {...props} >
    <a href="#" className="navbar-link">
      { title }
    </a>
    <div className="navbar-dropdown">
      { children }
    </div>
  </NavItem>);


NavDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  hoverable: PropTypes.bool,
};

NavDropdown.defaultProps = {
  children: null,
  hoverable: false,
};

export default NavDropdown;
