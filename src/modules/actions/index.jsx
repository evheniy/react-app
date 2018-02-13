import React from 'react';
import { injectReducer, injectEpic } from 'wpb/lib/store';
import Container from './containers';
import redux from './reducers';
import epics from './epics';
import { ACTIONS } from './constants';

injectEpic(ACTIONS, epics);
injectReducer(ACTIONS, redux);

export default props => (
  <Container {...props} />
);
