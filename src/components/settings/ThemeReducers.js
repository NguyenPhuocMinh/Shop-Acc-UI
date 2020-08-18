import { CHANGE_THEME, changeTheme } from './Action';

const ThemeReducers = (previousState = 'light', action = changeTheme) => {
  if (action.type === CHANGE_THEME) {
    return action.payload;
  }
  return previousState;
};

export default ThemeReducers
