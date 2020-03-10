/** @jsx jsx */
import { jsx, css } from '@emotion/core';
//eslint-disable-next-line
import React, { useState } from 'react';

import BlinkyBox from './BlinkyBox.js';


function NavItem(props) {
  const [ hover, setHover ] = useState(false);

  const styling = css`
    ${'' /* border: 1px solid green; */}

    display: flex;
    flex-direction: row;
    align-items: flex-end;

    cursor: pointer;

    margin: 0px 10px;

    h2 {
      ${'' /* border: 1px solid red; */}

      @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
      font-family: 'Ubuntu Mono', monospace;

      font-size: 20px;
      user-select: none;

      transition: color 0.2s ease;
    }

    .section-prefix {
      color: ${hover ? "rgb(14, 236, 131)" : "rgb(19, 150, 88)"};
      padding-right: 4px;
    }

    .section-title {
      color: ${hover ? "rgb(236, 236, 236)" : "rgb(201, 201, 201)"};
      padding-right: ${hover ? "2px" : "10px"};
    }
  `;

  return (
    <div css={styling}
      onMouseEnter={
        () => {
          setHover(true);
        }
      }
      onMouseLeave={
        () => {
          setHover(false);
        }
      }>
      <a href={"#" + props.anchor}>
        <h2 className="section-prefix">
          >
        </h2>
      </a>
      <h2 className="section-title">
        <a href={"#" + props.anchor}>{props.content}</a>
      </h2>
      {
        hover ?
        <a href={"#" + props.anchor}>
          <BlinkyBox hover={hover}/>
        </a>
        :
        <>
        </>
      }
    </div>
  );
}


export default NavItem;
