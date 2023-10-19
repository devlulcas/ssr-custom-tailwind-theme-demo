import type { HSL, ThemeVariables } from './theme-by-user';

export function createCSSThemeString(theme: ThemeVariables): string {
  const createHSLString = (hsl: HSL) => {
    const [h, s, l] = hsl;
    return `${h} ${s}% ${l}%`;
  };

  return `
  :root {
    --background: ${createHSLString(theme.background)};
    --foreground: ${createHSLString(theme.foreground)};
    --primary: ${createHSLString(theme.primary)};
    --primary-foreground: ${createHSLString(theme.primaryForeground)};
    --secondary: ${createHSLString(theme.secondary)};
    --secondary-foreground: ${createHSLString(theme.secondaryForeground)};
  }  
  `;
}
