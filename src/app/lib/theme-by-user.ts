export type HSL = [number, number, number];

export type ThemeVariables = {
  background: HSL;
  foreground: HSL;
  primary: HSL;
  primaryForeground: HSL;
  secondary: HSL;
  secondaryForeground: HSL;
};

const THEME_BY_USER: Record<string, ThemeVariables> = {
  deez: {
    background: [0, 0, 0],
    foreground: [0, 0, 100],
    primary: [40, 50, 10],
    primaryForeground: [10, 50, 50],
    secondary: [160, 50, 50],
    secondaryForeground: [160, 50, 75],
  },
  nuts: {
    background: [0, 0, 100],
    foreground: [240, 40, 50],
    primary: [100, 50, 10],
    primaryForeground: [160, 50, 50],
    secondary: [280, 50, 50],
    secondaryForeground: [280, 50, 75],
  },
  default: {
    background: [0, 0, 100],
    foreground: [240, 10, 3.9],
    primary: [140, 50, 10],
    primaryForeground: [100, 50, 50],
    secondary: [360, 50, 50],
    secondaryForeground: [360, 50, 75],
  },
};

export const USERS = Object.keys(THEME_BY_USER);

export function getThemeByUser(user = "default"): ThemeVariables {
  return THEME_BY_USER[user] || THEME_BY_USER["default"];
}
