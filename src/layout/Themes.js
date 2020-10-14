import { palette, overrides, shape, props } from './theme';

export const darkTheme = {
  ...palette.darkPalette,
};

export const lightTheme = {
  ...palette.lightPalette,
  ...overrides,
  ...shape,
  ...props
};
