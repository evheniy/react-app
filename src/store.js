import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import logger from 'redux-logger';

const epicMiddleware = createEpicMiddleware(combineEpics());

const middlewares = [
  epicMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const storeParams = [
  store => store || {},
  window.STATE_FROM_SERVER || {},
  composeEnhancers(applyMiddleware(...middlewares)),
];

const store = createStore(...storeParams);


export default store;

const epic$ = new BehaviorSubject(epicMiddleware);

export const injectAsyncEpic = (asyncEpic$) => {
  epic$.next(asyncEpic$);
};

store.asyncReducers = {};

export const injectAsyncReducer = (name, asyncReducer) => {
  store.asyncReducers[name] = asyncReducer;

  store.replaceReducer(combineReducers(store.asyncReducers));
};
