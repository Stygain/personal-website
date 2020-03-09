/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import SectionHeader from './SectionHeader.js';
import ImageContainer from './ImageContainer.js';


function Personal(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    margin-top: 45vh;

    ${'' /* @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap'); */}
    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
    font-family: 'Ubuntu Mono', monospace;

    display: flex;
    flex-direction: column;

    .personal.content-container {
      border: 1px solid red;

      margin-top: 10px;

      display: flex;
      flex-direction: row;
    }

    .about-text-container {
      border: 1px solid green;

      max-width: calc(100% - (38vw - 3px + 25px));
    }
  `;

  return (
    <div css={styling}>
      <SectionHeader content="About Me" margin="140" />
      <div className="personal content-container">
        <div className="about-text-container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <ImageContainer />
      </div>
    </div>
  );
}


export default Personal;
