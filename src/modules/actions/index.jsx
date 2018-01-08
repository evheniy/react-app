import React from 'react';
import { injectReducer, injectEpic } from 'wpb/lib/store';
import Container from './containers';
import redux from './reducers';
import epics from './epics';

injectEpic(epics);
injectReducer('actions', redux);

export default props => (
  <Container {...props} />
);
