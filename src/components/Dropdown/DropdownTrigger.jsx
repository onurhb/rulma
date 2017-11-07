import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../../elements/Button';
import Icon from '../../elements/Icon';

const DropdownTrigger = ({ title, ...props }) => (
  <Button aria-controls="dropdown-menu" aria-haspopup="true" {...props} >
    <span> { title } </span>
    <Icon icon="angle-down" />
  </Button>
);


DropdownTrigger.propTypes = {
  title: PropTypes.string.isRequired,
};


export default DropdownTrigger;
