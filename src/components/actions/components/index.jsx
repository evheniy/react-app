import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Panel, Layout, Navigation, Button } from 'react-toolbox';
import { Link } from 'react-router-dom';
import style from './style.scss';

const component = ({ status, initActions, clearActions }) => (
  <Layout>
    <Panel>
      <AppBar title="React app from scratch">
        <Navigation type="horizontal" className={style.link}>
          <Link to="/">
            <Button
              icon="inbox"
              label="Home"
              flat
            />
          </Link>
          <Link to="/actions">
            <Button
              icon="person"
              label="Actions"
              flat
            />
          </Link>
        </Navigation>
      </AppBar>
      <div className={style.content}>
        <div>
          <h3>State: {status}</h3>
          { status !== 'idle' && <button onClick={initActions}>Init</button> }
          { status === 'idle' && <button onClick={clearActions}>Clear</button> }
        </div>
      </div>
    </Panel>
  </Layout>
);

component.propTypes = {
  status: PropTypes.string.isRequired,
  initActions: PropTypes.func.isRequired,
  clearActions: PropTypes.func.isRequired,
};

export default component;
