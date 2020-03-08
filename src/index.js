/** @jsx jsx */
import { jsx, Global, css } from '@emotion/core';
import ReactDOM from 'react-dom';

import App from './App.js';


const globalStyles = css`
  body {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

ReactDOM.render(
  <div>
    <Global styles={globalStyles} />
    <App />
  </div>, document.getElementById('root'));
