import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';
import Router from './router';

const renderApp = () => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Router />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );

  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').catch(() => {
      });
    });
  }
};

renderApp();

if (module.hot) {
  module.hot.accept();
}
