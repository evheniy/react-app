import React, { Fragment } from 'react';
import { app, Loadable } from 'wpb';
import { Route } from 'react-router-dom';

app(() => (
  <Fragment>
    <Route exact path="/" component={Loadable(import('./modules/home'))} />
    <Route path="/actions" component={Loadable(import('./modules/actions'))} />
  </Fragment>
));

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(() => {
    });
  });
}

