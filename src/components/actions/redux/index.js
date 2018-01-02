import * as constants from './constatnts';

const defaultState = {
  status: 'null',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ACTIONS_INIT:
      return { ...state, status: 'init' };
    case constants.ACTIONS_IDLE:
      return { ...state, status: 'idle' };
    default:
      return state;
  }
};
