import React from 'react';
import Loadable from 'react-loadable';
import loading from './loader';

const LoadableComponent = Loadable({
  loader: () => import('./home'),
  loading,
});

export default () => (
  <LoadableComponent key={Math.random()} />
);
