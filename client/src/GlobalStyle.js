import React from 'react';
import { Global, css } from '@emotion/core';
import colors from '../src/utils/colors';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          font-size: 16px;
          margin: 0;
          font-family: 'Ubuntu', sans-serif;
          background-color: ${colors.pageBackground};
        }
      `}
    />
  );
}

export default GlobalStyle;
