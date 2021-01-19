import { css } from '@emotion/react';

export default function useGlobalCss() {
  // Define global css rules
  const globalCss = css`
    body {
      font-family: 'Noto Sans JP', 'Helvetica', sans-serif;
      background-color: #f5eded;
    }
    a {
      text-decoration: none;
      font-weight: 300;
      font-size: 0.7rem;
      color: #303a52;
    }
    h1 {
      font-size: 4rem;
      font-weight: 700;
    }
    h4 {
      font-size: 1.4rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    h5 {
      font-size: 1rem;
      font-weight: 400;
      text-transform: uppercase;
    }
    h6 {
      font-size: 0.9rem;
      font-weight: 300;
    }
    p {
      font-size: 0.7rem;
      line-height: 1.6;
      font-weight: 300;
    }
  `;

  return globalCss;
}
