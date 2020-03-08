/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import ExpandArrow from './ExpandArrow.js';


function SideBar(props) {
  const [ expanded, setExpanded ] = useState(false);

  const styling = css`
    ${'' /* border: 1px solid green; */}

    position: absolute;
    bottom: 0px;
    left: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .expansion-container {
      ${'' /* border: 1px solid red; */}

      height: 0px;
      overflow: hidden;

      ${'' /* TODO change ease */}
      transition: height 1s ease;
    }

    .expansion-container.expanded {
      height: 100px;
    }
  `;

  return (
    <div css={styling}>
      <div className="tester"></div>
      <ExpandArrow expanded={expanded} setExpanded={setExpanded} />
      <div className={expanded ? "expansion-container expanded" : "expansion-container"}>
        <h3 className="title"><a href="/">GithubICON</a></h3>
        <h3 className="title"><a href="/">LinkedInICON</a></h3>
      </div>
    </div>
  );
}


export default SideBar;
