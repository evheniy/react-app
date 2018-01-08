import * as constants from '../constants';

const status = 'null';

const defaultState = {
  status,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ACTIONS_INIT:
      return { ...state, status: 'init' };
    case constants.ACTIONS_IDLE:
      return { ...state, status: 'idle' };
    case constants.ACTIONS_CLEAR:
      return { ...state, status };
    default:
      return state;
  }
};
