import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import layoutReducer from '../modules/layout/redux';

export default (asyncReducers = {}) => combineReducers({
  router: routerReducer,
  layout: layoutReducer,
  ...asyncReducers,
});
