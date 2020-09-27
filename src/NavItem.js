/** @jsx jsx */
import { jsx, css } from '@emotion/core';
//eslint-disable-next-line
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setCompressorShow } from './Redux/actions.js';

import BlinkyBox from './BlinkyBox.js';


function NavItem(props) {
  const dispatch = useDispatch();

  const [ hover, setHover ] = useState(false);

  const styling = css`
    ${'' /* border: 1px solid green; */}

    display: flex;
    flex-direction: row;
    align-items: flex-end;

    cursor: pointer;

    margin: 0px 10px;

    ${'' /* transition: all 0.2s ease; */}


    h2 {
      ${'' /* border: 1px solid red; */}

      @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
      font-family: 'Ubuntu Mono', monospace;

      font-size: 20px;
      white-space: nowrap;
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

    @media (max-width: 800px) {
      margin: 10px 10px;
      padding: 15px 10px;

      .section-title {
        font-size: 28px;
        padding-right: ${hover ? "4px" : "16px"};
      }
    }
  `;

  function handleClick(e) {
    dispatch(setCompressorShow(false));
  }

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
      <a href={"#" + props.anchor}
        onClick={handleClick}>
        <h2 className="section-prefix">
          >
        </h2>
      </a>
      <a href={"#" + props.anchor}
        onClick={handleClick}>
        <h2 className="section-title">
          {props.content}
        </h2>
      </a>
      {
        hover ?
        <a href={"#" + props.anchor}
          onClick={handleClick}>
          <BlinkyBox hover={hover}/>
        </a>
        :
        <React.Fragment>
        </React.Fragment>
      }
    </div>
  );
}


export default NavItem;
