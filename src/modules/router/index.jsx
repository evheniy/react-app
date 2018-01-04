import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import { ConnectedRouter } from 'react-router-redux';

import loading from './loader';
import { history } from '../../store';

const LoadableAction = path => Loadable({
  loader: () => path,
  loading,
});

export default () => (
  <ConnectedRouter history={history}>
    <Router>
      <div>
        <Route exact path="/" component={LoadableAction(import('../home'))} />
        <Route path="/actions" component={LoadableAction(import('../actions'))} />
      </div>
    </Router>
  </ConnectedRouter>
);
