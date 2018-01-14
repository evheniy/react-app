import {
  LAYOUT_SHOW_DRAWER,
  LAYOUT_HIDE_DRAWER,
} from '../constants';

const defaultState = {
  isDrawerActive: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LAYOUT_SHOW_DRAWER:
      return { ...state, isDrawerActive: true };
    case LAYOUT_HIDE_DRAWER:
      return { ...state, isDrawerActive: false };
    default:
      return state;
  }
};
