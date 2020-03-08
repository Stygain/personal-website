/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';


function ExpandArrow(props) {
  const styling = css`
    ${'' /* border: 1px solid blue; */}

    position: relative;

    width: 60px;
    height: 30px;
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;

    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
    background-color: rgb(30, 255, 25);

    cursor: pointer;

    .arrow {
      position: absolute;
      top: 0px;
      left: 0px;

      width: 25px;
      height: 7px;
      background-color: rgb(0, 0, 0);

      ${'' /* TODO change ease */}
      transition: transform 0.2s ease;
    }

    .arrow.arrow-left {
      transform: translateY(12px) translateX(11px) rotate(-45deg);
    }

    .arrow.arrow-right {
      transform: translateY(12px) translateX(24px) rotate(45deg);
    }

    .arrow-left.expanded {
      transform: translateY(13px) translateX(11px) rotate(45deg);
    }

    .arrow-right.expanded {
      transform: translateY(13px) translateX(24px) rotate(-45deg);
    }
  `;

  return (
    <div css={styling} onClick={
      () => {
        props.setExpanded(!props.expanded);
      }
    }>
      <div className={props.expanded ? "arrow arrow-left expanded" : "arrow arrow-left"}></div>
      <div className={props.expanded ? "arrow arrow-right expanded" : "arrow arrow-right"}></div>
    </div>
  );
}


export default ExpandArrow;
