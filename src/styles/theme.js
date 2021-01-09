const mediaQuery = (breakpoint) => {
  return `@media (min-width: ${breakpoint}px)`
}

const theme = {
  /**
   * Responsive Breakpoints
   */
  breakpoints: {
    sm: mediaQuery(576),
    md: mediaQuery(768),
    lg: mediaQuery(992),
    xl: mediaQuery(1200),
  },
}

export default theme;
