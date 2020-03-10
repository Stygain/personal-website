/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import SectionHeader from './SectionHeader.js';
import ImageContainer from './ImageContainer.js';


function Personal(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    margin: 0px 10px;
    margin-top: 50vh;

    ${'' /* @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap'); */}
    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
    font-family: 'Ubuntu Mono', monospace;

    display: flex;
    flex-direction: column;

    .personal.content-container {
      ${'' /* border: 1px solid red; */}

      margin-top: 10px;

      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .about-text-container {
      ${'' /* border: 1px solid green; */}

      width: 40%;
      max-width: calc(100% - (38vw - 3px + 25px));
    }

    p {
      margin-top: 15px;
      font-size: 18px;
    }

    p:nth-child(1) {
      margin-top: 0px;
    }

    a {
      color: rgb(14, 236, 131);
    }

    @media (max-width: 800px) {
      .about-text-container {
        width: 60%;
      }
    }
  `;

  return (
    <div css={styling} id="about-me-anchor">
      <SectionHeader content="About Me" margin="140" />
      <div className="personal content-container">
        <div className="about-text-container">
          <p>I am a software engineer from Portland, Oregon who enjoys creating things of all kinds, whether that be software, woodworking, computers, or more! I am a recent graduate of <a href="https://oregonstate.edu/">Oregon State University</a> where I received a BS in Computer Science with a focus in security.</p>
          <p>After graduating Oregon State I joined the Windows endpoint team at <a href="https://www.carbonblack.com/">VMware Carbon Black</a> where I get to work on core functionality of antivirus software.</p>
        </div>
        <ImageContainer />
      </div>
    </div>
  );
}


export default Personal;
