import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Panel, Layout, Navigation, Button, NavDrawer } from 'react-toolbox';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';

import style from './style.scss';

const homeLink = (
  <NavLink
    exact
    to="/"
    className={style.link}
    activeClassName={style.selected}
  >
    <Button
      icon="inbox"
      label="Home"
      flat
    />
  </NavLink>
);

const actionsLink = (
  <NavLink
    exact
    to="/actions"
    className={style.link}
    activeClassName={style.selected}
  >
    <Button
      icon="person"
      label="Actions"
      flat
    />
  </NavLink>
);

const title = 'React app from scratch';

const Component = ({ children, isDrawerActive, toggleDrawerAction }) => (
  <Layout>
    <NavDrawer
      active={isDrawerActive}
      onOverlayClick={toggleDrawerAction}
      className={style.drawer}
    >
      <Navigation type="vertical">
        <div onClick={toggleDrawerAction}>
          {homeLink}
        </div>
        <div onClick={toggleDrawerAction}>
          {actionsLink}
        </div>
      </Navigation>
    </NavDrawer>
    <Panel>
      <Media query="(max-width: 599px)">
        {
          matches => matches ? (
            <AppBar
              title={title}
              leftIcon="menu"
              onLeftIconClick={toggleDrawerAction}
            />
          ) : (
            <AppBar title={title}>
              <Navigation type="horizontal" className={style.link}>
                {homeLink}
                {actionsLink}
              </Navigation>
            </AppBar>
          )
        }
      </Media>
      <div className={style.content}>
        {children}
      </div>
    </Panel>
  </Layout>
);

Component.propTypes = {
  children: PropTypes.node,
  isDrawerActive: PropTypes.bool.isRequired,
  toggleDrawerAction: PropTypes.func.isRequired,
};

Component.defaultProps = {
  children: null,
};

export default Component;
