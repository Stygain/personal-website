/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App.js';
import store from './Redux/store.js';


const globalStyles = css`
  body {
    margin: 0;

    background-color: rgb(0, 58, 83);
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    color: rgb(255, 255, 255);
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <Global styles={globalStyles} />
    <App />
  </Provider>, document.getElementById('root'));
