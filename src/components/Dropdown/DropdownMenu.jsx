import React from 'react';
import PropTypes from 'prop-types';


const DropdownMenu = ({ children, ...props }) => (
  <div id="dropdown-menu" role="menu" {...props} className={`dropdown-menu${props.className ? props.className : ''} `}>
    <div className="dropdown-content">
      { children }
    </div>
  </div>
);


DropdownMenu.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  className: PropTypes.string,
};

DropdownMenu.defaultProps = {
  children: null,
  className: '',
};


export default DropdownMenu;
