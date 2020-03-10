/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import NavTitle from './NavTitle.js';
import NavItem from './NavItem.js';


function NavBar(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap');
    font-family: 'Oxanium', monospace;

    ${'' /* border-bottom: 1px solid rgb(9, 62, 84); */}
    box-shadow: 0px 3px 5px 0px rgba(4, 45, 62, 0.78);
    padding: 15px 5px;
    background-color: rgb(0, 58, 83);
    z-index: 20;

    display: flex;
    flex-direction: row;
    align-items: baseline;

    position: fixed;
    top: 0;
    width: 100%;

    transition: top 0.3s;

    .grower {
      flex-grow: 4;
    }

    .title {
      margin-left: 10px;
    }
  `;

  return (
    <div css={styling}>
      <NavTitle id="home" />
      <div className="grower"></div>
      <NavItem content="About Me" anchor="about-me-anchor" />
      <NavItem content="Work" anchor="work-anchor" />
    </div>
  );
}


export default NavBar;
