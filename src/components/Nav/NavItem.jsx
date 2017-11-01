import React from 'react';
import PropTypes from 'prop-types';

import classNames, { modifierPropTypes } from '../../modifiers';

const NavItem = ({ as, active, brand, tab, dropdown, hoverable, ...props }) => {
  const [classes, restProps] = classNames(props, 'navbar-item', {
    'is-active': active,
    'is-brand': brand,
    'is-tab': tab,
    'is-hoverable': hoverable,
    'has-dropdown': dropdown,
  });

  const ElementType = as || (props.href ? 'a' : 'div');

  return <ElementType className={classes} {...restProps} />;
};

NavItem.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  brand: PropTypes.bool,
  href: PropTypes.string,
  ...modifierPropTypes,
  tab: PropTypes.bool,
  dropdown: PropTypes.bool,
  hoverable: PropTypes.bool,
};

NavItem.defaultProps = {
  as: null,
  active: false,
  brand: false,
  href: null,
  tab: false,
  dropdown: false,
  hoverable: false,
};

export default NavItem;
