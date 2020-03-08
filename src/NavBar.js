/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import NavItem from './NavItem.js';


function NavBar(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap');
    font-family: 'Oxanium', monospace;

    padding: 10px 5px;

    display: flex;
    flex-direction: row;
    align-items: baseline;

    .grower {
      flex-grow: 4;
    }
  `;

  return (
    <div css={styling}>
      <h1 className="title">Adam Barton</h1>
      <div className="grower"></div>
      <NavItem content="Section1" />
      <NavItem content="Section2" />
    </div>
  );
}


export default NavBar;
