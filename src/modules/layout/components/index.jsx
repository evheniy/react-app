import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Panel } from 'react-toolbox';
import Drawer from './drawer';
import Menu from './menu';
import Bar from './bar';
import style from './style.scss';

const Component = ({ children, isDrawerActive, showDrawerAction, hideDrawerAction, routes, title }) => (
  <Layout>
    <Drawer isDrawerActive={isDrawerActive} hideDrawerAction={hideDrawerAction}>
      <Menu type="vertical" routes={routes} />
    </Drawer>
    <Panel>
      <Bar showDrawerAction={showDrawerAction} title={title}>
        <Menu type="horizontal" routes={routes} />
      </Bar>
      <div className={style.content}>
        {children}
      </div>
    </Panel>
  </Layout>
);

Component.propTypes = {
  children: PropTypes.node,
  isDrawerActive: PropTypes.bool.isRequired,
  showDrawerAction: PropTypes.func.isRequired,
  hideDrawerAction: PropTypes.func.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

Component.defaultProps = {
  children: null,
  routes: [],
};

export default Component;
