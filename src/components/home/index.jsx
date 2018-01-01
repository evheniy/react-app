import React from 'react';
import { AppBar, Panel, Layout, Navigation, Link } from 'react-toolbox';

import style from './style.scss';
import logo from './logo.png';

module.exports = () => (
  <Layout>
    <Panel>
      <AppBar title="React app from scratch">
        <Navigation type="horizontal" className={style.link}>
          <Link
            href="/"
            label="Home"
            active
            icon="inbox"
          />
          <Link
            href="/"
            label="Actions"
            icon="person"
            className={style.link}
          />
        </Navigation>
      </AppBar>
      <div className={style.content}>
        <img src={logo} alt="logo" />
        <h1>
          <Link
            href="https://medium.com/@evheniybystrov/react-app-from-scratch-d694300d1631"
            label="Read more..."
          />
        </h1>
      </div>
    </Panel>
  </Layout>
);
