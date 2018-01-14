import {
  LAYOUT_SHOW_DRAWER,
  LAYOUT_HIDE_DRAWER,
} from '../constants';

export const showDrawerAction = () => ({
  type: LAYOUT_SHOW_DRAWER,
});

export const hideDrawerAction = () => ({
  type: LAYOUT_HIDE_DRAWER,
});
