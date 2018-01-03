import LAYOUT_TOGGLE_DRAWER from './constants';

const defaultState = {
  isDrawerActive: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LAYOUT_TOGGLE_DRAWER:
      return { ...state, isDrawerActive: !state.isDrawerActive };
    default:
      return state;
  }
};
