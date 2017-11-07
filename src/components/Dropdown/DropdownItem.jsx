import React from 'react';
import PropTypes from 'prop-types';


const DropdownItem = ({ as, children, href, ...props }) => {
  const ElementType = href ? 'a' : as;
  return (
    <ElementType className="dropdown-item" {...props} >
      { children }
    </ElementType>);
};


DropdownItem.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.string]),
  href: PropTypes.string,
};

DropdownItem.defaultProps = {
  as: 'span',
  children: null,
  href: null,
};


export default DropdownItem;
