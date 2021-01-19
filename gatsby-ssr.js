import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { Global, ThemeProvider } from '@emotion/react';
import { DarkModeProvider } from './src/context/DarkModeContext';
import theme from './src/styles/theme';
import useGlobalCss from './src/styles/globalCss';
import './src/styles/reset.css';
import './src/styles/fonts.css';

export const wrapRootElement = ({ element }) => (
  <DarkModeProvider>
    <ThemeProvider theme={theme}>
      <GlobalCssStyles />
      {element}
    </ThemeProvider>
  </DarkModeProvider>
);

export const wrapPageElement = ({ element }) => (
  <AnimateSharedLayout>{element}</AnimateSharedLayout>
);

const GlobalCssStyles = () => {
  const css = useGlobalCss();
  return <Global styles={css} />;
};
