/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import SectionHeader from './SectionHeader.js';


function Work(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    margin-top: 50vh;

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

    .link-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    h5 {
      font-size: 20px;
      color: rgb(157, 199, 217);

      transition: color 0.3s ease;
    }

    .link-box {
      border: 1px solid green;

      padding: 10px 20px;
      padding-left: 25px;

      cursor: pointer;

      background-color: rgb(0, 58, 83);

      transition: background-color 0.2s ease;
    }

    .link-box:hover {
      background-color: rgb(7, 75, 105);

      h5 {
        color: rgb(14, 236, 131);
      }
    }
  `;

  return (
    <div css={styling}>
      <SectionHeader content="Work" margin="75" />
      <div className="work content-container">
        <div className="link-container">
          <div className="link-box">
            <h5>Link1</h5>
          </div>
          <div className="link-box">
            <h5>Link2</h5>
          </div>
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
