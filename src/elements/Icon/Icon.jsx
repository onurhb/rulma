import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { sizePropType } from '../../modifiers';


// Map size to fa-<size> e.g. fa-large to fa-2x
function getFaSize(size) {
  if (size === null) return 'lg';
  if (size === 'medium') return '2x';
  if (size === 'large') return '3x';
  return null;
}

const Icon = ({
  'aria-hidden': ariaHidden,
  'aria-label': ariaLabel,
  className,
  fw,
  icon,
  left,
  right,
  spin,
  size,
  ...rest
}) => {
  const faSize = getFaSize(size);

  const iconClasses = classNames(`fa fa-${icon}`, {
    'fa-fw': fw,
    'fa-spin': spin,
    [`fa-${getFaSize(size)}`]: faSize,
  });

  const containerClasses = classNames('icon', className, {
    'is-left': left,
    'is-right': right,
    [`is-${size}`]: size,
  });

  return (
    <span className={containerClasses} {...rest}>
      <i
        aria-hidden={ariaLabel ? false : ariaHidden}
        aria-label={ariaLabel}
        className={iconClasses}
      />
    </span>
  );
};

Icon.propTypes = {
  'aria-hidden': PropTypes.bool,
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  fw: PropTypes.bool,
  icon: PropTypes.string,
  left: PropTypes.bool, // When within a <Control />
  right: PropTypes.bool, // When within a <Control />
  spin: PropTypes.bool,
  size: sizePropType,
};

Icon.defaultProps = {
  'aria-hidden': true,
  'aria-label': null,
  className: null,
  fw: false,
  icon: null,
  left: false,
  right: false,
  size: null,
  spin: false,
};

export default Icon;
