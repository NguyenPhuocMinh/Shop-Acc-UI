import { CHANGE_THEME, changeTheme } from '../actions/themeAction';

const themeReducers = (previousState = 'light', action = changeTheme) => {
  if (action.type === CHANGE_THEME) {
    return action.payload;
  }
  return previousState;
};

export default themeReducers
