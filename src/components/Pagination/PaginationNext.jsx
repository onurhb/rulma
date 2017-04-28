import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PaginationNext = ({ className, children, disabled, ...props }) => {
  const child = React.Children.only(children);
  const classes = classNames('pagination-next', className, child.props.className);

  return React.cloneElement(child, { className: classes, disabled, ...props });
};

PaginationNext.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
};

PaginationNext.defaultProps = {
  className: null,
  disabled: false,
};

export default PaginationNext;
