import React from 'react';
import PropTypes from 'prop-types';

import modifiers from '../../modifiers';

// Components
import DropdownTrigger from './DropdownTrigger';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownDivider from './DropdownDivider';


const Dropdown = ({ active, hoverable, right, up, trigger, children, ...props }) => {
  const [classes, restProps] = modifiers(props, 'dropdown', {
    'is-active': active,
    'is-hoverable': hoverable,
    'is-right': right,
    'is-up': up,
  });

  return (
    <div className={classes} {...restProps} >
      <div className="dropdown-trigger">
        { trigger }
      </div>
      { children }
    </div>
  );
};

Dropdown.propTypes = {
  active: PropTypes.bool,
  hoverable: PropTypes.bool,
  right: PropTypes.bool,
  up: PropTypes.bool,
  trigger: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};

Dropdown.defaultProps = {
  active: false,
  hoverable: false,
  right: false,
  up: false,
  trigger: <DropdownTrigger title="Dropdown" />,
  children: null,
};

Dropdown.Item = DropdownItem;
Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Divider = DropdownDivider;

export default Dropdown;
