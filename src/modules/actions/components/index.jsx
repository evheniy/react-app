import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import style from './style.scss';

const classNames = {
  appear: style.appear,
  appearActive: style['appear-active'],
  enter: style.enter,
  enterActive: style['enter-active'],
  exit: style.exit,
  exitActive: style['exit-active'],
};

const transitionProps = {
  timeout: 1000,
  classNames,
};

const Component = ({ status, initActions, clearActions }) => (
  <Fragment>
    <h1>Status: {status}</h1>
    <TransitionGroup>
      {status !== 'idle' && (
        <CSSTransition {...transitionProps}>
          <button onClick={initActions}>Init</button>
        </CSSTransition>
      )}
      {status === 'idle' && (
        <CSSTransition {...transitionProps}>
          <button onClick={clearActions}>Clear</button>
        </CSSTransition>
      )}
    </TransitionGroup>
  </Fragment>
);

Component.propTypes = {
  status: PropTypes.string.isRequired,
  initActions: PropTypes.func.isRequired,
  clearActions: PropTypes.func.isRequired,
};

export default Component;
