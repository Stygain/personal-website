/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import ImageContainer from './ImageContainer.js';

import ProfilePhoto from '../Images/IMG_0774-cut-crop.jpg';


function Personal(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    margin-top: 40px;

    ${'' /* @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap'); */}
    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
    font-family: 'Ubuntu Mono', monospace;

    display: flex;
    flex-direction: column;

    h1::before {
      content: "";

      display: block;

      position: relative;
      top: 21px;

      height: 2px;
      width: 20px;
      ${'' /* margin-left: 150px; */}
      margin-left: -27px;

      background-color: rgba(4, 45, 62, 0.78);
    }

    h1 {
      ${'' /* border: 1px solid red; */}

      padding-left: 30px;
    }

    h1::after {
      content: "";

      display: block;

      position: relative;
      bottom: 14px;

      height: 2px;
      width: 200px;
      margin-left: 140px;

      background-color: rgba(4, 45, 62, 0.78);
    }
  `;

  return (
    <div css={styling}>
      <h1 className="section-header">About Me</h1>
      <ImageContainer />
    </div>
  );
}


export default Personal;
