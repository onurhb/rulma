import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import NavLeft from './NavLeft';
import NavRight from './NavRight';
import NavItem from './NavItem';
import NavToggle from './NavToggle';
import NavDivider from './NavDivider';
import NavDropdown from './NavDropdown';

const Nav = ({ className, shadow, ...props }) => {
  const classes = classNames('navbar', className, {
    'has-shadow': shadow,
  });

  return <nav className={classes} {...props} />;
};

Nav.propTypes = {
  className: PropTypes.string,
  shadow: PropTypes.bool,
};

Nav.defaultProps = {
  className: null,
  shadow: false,
};

// Add the sub components to the top level export for ease of use
Nav.Left = NavLeft;
Nav.Right = NavRight;
Nav.Item = NavItem;
Nav.Toggle = NavToggle;
Nav.Divider = NavDivider;
Nav.Dropdown = NavDropdown;

export default Nav;
