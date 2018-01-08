import React from 'react';
import { injectReducer } from 'wpb/lib/store';
import Container from './containers';
import redux from './redux';

injectReducer('layout', redux);

export default props => (
  <Container {...props} />
);
