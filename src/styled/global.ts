import {createGlobalStyle} from 'styled-components';
import {NunitoSans} from '../assets/fonts';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: NunitoSans-Light;
    font-display: swap;
    src: url('${NunitoSans.Light}'),
    url('${NunitoSans.Light}') format('woff');
  }

  @font-face {
    font-family: NunitoSans-Regular;
    font-display: swap;
    src: url('${NunitoSans.Regular}'),
    url('${NunitoSans.Regular}') format('woff');
  }

  @font-face {
    font-family: NunitoSans-Bold;
    font-display: swap;
    src: url('${NunitoSans.Bold}'),
    url('${NunitoSans.Bold}') format('woff');
  }

  @font-face {
    font-family: NunitoSans-ExtraBold;
    font-display: swap;
    src: url('${NunitoSans.ExtraBold}'),
    url('${NunitoSans.ExtraBold}') format('woff');
  }
  
  #root {
    font-family: NunitoSans-Regular, sans-serif;
  }
  p {
    margin: 0;
    padding: 0;
  }
  /* html,
  body,
  #root {
    margin: 0;
    height: 100%;
    font-family: ProximaNova-Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    background-color: #FDFDFF;
    color: #181A20;
  };

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  };

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  };

  input {
    color: inherit;
  }

  .active-nav-link div {
    color: #23262F;
    font-weight: 600;
  }

  .active-nav-link div::before {
    content: '';
    position: absolute;
    width: 100%;
    display: block;
    border-bottom: 2px solid #23262F;
    bottom: -4px;
  } */
`;

export {GlobalStyle};
