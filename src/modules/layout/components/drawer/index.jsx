import React from 'react';
import PropTypes from 'prop-types';
import { NavDrawer } from 'react-toolbox';
import style from './style.scss';

const Drawer = ({ children, isDrawerActive, hideDrawerAction }) => (
  <NavDrawer
    active={isDrawerActive}
    onOverlayClick={hideDrawerAction}
    className={style.drawer}
  >
    {children}
  </NavDrawer>
);

Drawer.propTypes = {
  children: PropTypes.node,
  isDrawerActive: PropTypes.bool.isRequired,
  hideDrawerAction: PropTypes.func.isRequired,
};

Drawer.defaultProps = {
  children: null,
};

export default Drawer;
