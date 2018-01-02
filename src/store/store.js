import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import logger from 'redux-logger';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import { epicMiddleware } from './epics';

const history = createHistory();

const middlewares = [epicMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const storeParams = [
  combineReducers({ router: routerReducer }),
  window.STATE_FROM_SERVER || {},
  composeEnhancers(applyMiddleware(...middlewares), offline(offlineConfig)),
];

const store = createStore(...storeParams);

store.asyncReducers = {};

const injectAsyncReducer = (name, asyncReducer) => {
  store.asyncReducers[name] = asyncReducer;

  store.replaceReducer(combineReducers(store.asyncReducers));
};

export { store, injectAsyncReducer, history };
