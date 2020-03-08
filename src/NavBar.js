/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';


function NavBar(props) {
  const styling = css`
    border: 1px solid green;
    
    display: flex;
    flex-direction: row;
    align-items: baseline;

    .grower {
      flex-grow: 4;
    }

    .section-title {
      border: 1px solid red;

      padding: 2px 4px;
    }
  `;

  return (
    <div css={styling}>
      <h1 className="title"><a href="/">Adam Barton</a></h1>
      <div className="grower"></div>
      <h2 className="section-title">Some Section1</h2>
      <h2 className="section-title">Some Section2</h2>
      <h2 className="section-title">Some Section3</h2>
    </div>
  );
}


export default NavBar;
