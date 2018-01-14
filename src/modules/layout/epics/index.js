import { combineEpics } from 'redux-observable';

import hideDrawerEpic from './hideDrawer';

export default combineEpics(hideDrawerEpic);
