import React from 'react';

import classNames, { modifierPropTypes } from '../../modifiers';

const NavLeft = (props) => {
  const [classes, restProps] = classNames(props, 'navbar-start');
  return <div className={classes} {...restProps} />;
};

NavLeft.propTypes = {
  ...modifierPropTypes,
};

export default NavLeft;
