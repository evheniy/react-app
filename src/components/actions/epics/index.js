import { combineEpics } from 'redux-observable';

import initEpic from './init';

export default combineEpics(initEpic);
