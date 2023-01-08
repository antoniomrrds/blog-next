import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/global-styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story,context) => (
    <ThemeProvider theme={theme}>
      <Story {...context}/>
      <GlobalStyles/>
    </ThemeProvider>
  ),
];
