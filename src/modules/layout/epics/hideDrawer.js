import { LOCATION_CHANGE } from 'react-router-redux';
import { hideDrawerAction } from '../actions';
import { LAYOUT } from '../constants';

export default (action$, store) => action$.ofType(LOCATION_CHANGE)
  .filter(() => store.getState()[LAYOUT].isDrawerActive)
  .map(hideDrawerAction);
