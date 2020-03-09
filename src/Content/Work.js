/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import SectionHeader from './SectionHeader.js';


function Work(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    margin-top: 45vh;

    ${'' /* @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap'); */}
    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
    font-family: 'Ubuntu Mono', monospace;

    display: flex;
    flex-direction: column;

    .work.content-container {
      border: 1px solid red;

      display: flex;
      flex-direction: row;
    }

    .work .text-container {
      border: 1px solid green;
      
      margin: 0px;
    }
  `;

  return (
    <div css={styling}>
      <SectionHeader content="Work" margin="75" />
      <div className="work content-container">
        <div className="link-container">
          <h5>Link1</h5>
          <h5>Link2</h5>
        </div>
        <div className="text-container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
}


export default Work;
