/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import ReactDOM from 'react-dom';

import App from './App.js';


const globalStyles = css`
  body {
    margin: 0;

    background-color: rgb(0, 58, 83);
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
  <div>
    <Global styles={globalStyles} />
    <App />
  </div>, document.getElementById('root'));
