import * as constants from './constatnts';

export const initActions = () => ({
  type: constants.ACTIONS_INIT,
  state: 'init',
});

export const idleActions = () => ({
  type: constants.ACTIONS_IDLE,
  state: 'idle',
});
