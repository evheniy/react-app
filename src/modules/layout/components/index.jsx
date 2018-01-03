import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Panel, Layout, Navigation, Button, NavDrawer } from 'react-toolbox';
import { Link } from 'react-router-dom';
import Media from 'react-media';

import style from './style.scss';

const homeLink = (
  <Link to="/">
    <Button
      icon="inbox"
      label="Home"
      flat
    />
  </Link>
);

const actionsLink = (
  <Link to="/actions">
    <Button
      icon="person"
      label="Actions"
      flat
    />
  </Link>
);

const title = 'React app from scratch';

const Component = ({ children, isDrawerActive, toggleDrawerAction }) => (
  <Layout>
    <NavDrawer
      active={isDrawerActive}
      onOverlayClick={toggleDrawerAction}
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
