import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/bg.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    background: #f0f0f5 url(${background}) no-repeat 70% top;

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 16px;
    font-family: Roboto, Ubuntu, -apple-system, BlinkMacSystemFont, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    width: 100%;
    height: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
