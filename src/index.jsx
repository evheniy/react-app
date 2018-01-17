import React from 'react';
import app from 'wpb/lib/app';
import DynamicComponent from 'wpb/lib/dynamic';
import { Route } from 'react-router-dom';
import registerObserver from 'react-perf-devtool';
import Layout from './modules/layout';
import HomePlaceholder from './modules/home/placeholder';
import ActionsPlaceholder from './modules/actions/components/placeholder';

const routes = [
  {
    path: '/',
    exact: true,
    component: DynamicComponent(import('./modules/home'), HomePlaceholder),
  },
  {
    path: '/actions',
    exact: true,
    component: DynamicComponent(import('./modules/actions'), ActionsPlaceholder),
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
