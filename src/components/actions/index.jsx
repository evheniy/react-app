import React from 'react';
import Container from './containers';
import redux from './redux';
import epics from './epics';

import { injectAsyncEpic, injectAsyncReducer } from '../../store';

injectAsyncEpic(epics);
injectAsyncReducer('actions', redux);

export default () => (
  <Container />
);
