/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import ExpandArrow from './ExpandArrow.js';
import GithubLogo from './Logos/GitHub-Mark-Light-32px.png';

function SideBar(props) {
  const [ expanded, setExpanded ] = useState(false);
  const [ hover, setHover ] = useState(false);

  const styling = css`
    ${'' /* border: 1px solid green; */}

    position: absolute;
    bottom: 0px;
    left: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .expansion-container {
      ${'' /* border: 1px solid blue; */}

      height: 0px;
      width: 60px;
      overflow: hidden;

      display: flex;
      flex-direction: column;
      align-items: center;

      box-shadow: inset 0 0 10px #000000;
      background-color: rgb(48, 48, 48);

      ${'' /* TODO change ease */}
      transition: height 0.7s cubic-bezier(.52,0,.19,1.4);
      ${'' /* transition: height 0.7s cubic-bezier(.81,.61,.85,1.37); */}
    }

    .expansion-container {
      height: ${hover ? "10px" : "0px"};
    }

    .expansion-container.expanded {
      height: 125px;
    }

    .linkedin {
      @import url("https://use.typekit.net/gej5mzo.css");
      font-family: myriad-pro, sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 28px;
      text-align: center;
    }

    .title {
      ${'' /* border: 1px solid red; */}

      padding: 2px;
      margin: 10px;
    }
  `;

  return (
    <div css={styling}>
      <div className="tester"></div>
      <ExpandArrow expanded={expanded} setExpanded={setExpanded} setHover={setHover} />
      <div className={expanded ? "expansion-container expanded" : "expansion-container"}>
        <h3 className="title"><a href="https://github.com/Stygain"><img src={GithubLogo} alt="Github logo" /></a></h3>
        <h3 className="title linkedin"><a href="https://www.linkedin.com/in/adam-barton-a43151133">in</a></h3>
      </div>
    </div>
  );
}


export default SideBar;
