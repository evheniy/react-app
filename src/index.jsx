import React from 'react';
import { app, Loadable } from 'wpb';
import { Route } from 'react-router-dom';
import Layout from './modules/layout';
import registerObserver from 'react-perf-devtool';

const routes = [
  {
    path: '/',
    exact: true,
    component: Loadable(import('./modules/home')),
  },
  {
    path: '/actions',
    exact: true,
    component: Loadable(import('./modules/actions')),
  },
];

app(() => (
  <Layout routes={routes} title="React app from scratch">
    {routes.map(props => <Route key={props.path} {...props} />)}
  </Layout>
));

if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
  registerObserver();
}

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  });
}
