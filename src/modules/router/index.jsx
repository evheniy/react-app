import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import { ConnectedRouter } from 'react-router-redux';

import loading from './loader';
import { history } from '../../store';

const LoadableHome = Loadable({
  loader: () => import('../home'),
  loading,
});

const LoadableActions = Loadable({
  loader: () => import('../actions'),
  loading,
});

export default () => (
  <ConnectedRouter history={history}>
    <Router>
      <div>
        <Route exact path="/" component={LoadableHome} />
        <Route path="/actions" component={LoadableActions} />
      </div>
    </Router>
  </ConnectedRouter>
);
