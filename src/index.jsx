import React from 'react';
import app from 'wpb/lib/app';
import { renderRoutes } from 'react-router-config';
import Layout from './modules/layout';
import routes from './routes';

app(() => (
  <Layout routes={routes} title="React app from scratch">
    {renderRoutes(routes)}
  </Layout>
));

if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
  require('react-perf-devtool')();
}

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  });
}
