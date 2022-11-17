/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function Info(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    margin-top: 20vh;
    margin-left: 20px;

    @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
    font-family: 'Ubuntu Mono', monospace;

    ${'' /* padding: 10px 5px; */}

    display: flex;
    flex-direction: column;
    ${'' /* align-items: baseline; */}

    .name-intro {
      font-family: 'Oxanium', monospace;
      font-size: 16px;
      margin-bottom: -4px;
      color: rgb(144, 160, 167);
    }

    .name {
      font-family: 'Oxanium', monospace;
      ${'' /* font-size: 72px; */}
      font-size: 8vw;
    }

    .occupation-intro {
      ${'' /* border: 1px solid red; */}

      margin-top: -13px;
      margin-bottom: -7px;
      width: 70%;
      text-align: right;
      font-family: 'Oxanium', monospace;
      font-size: 16px;
      color: rgb(144, 160, 167);
    }

    ${'' /* .occupation-container {
      border: 1px solid red;

      width: 80%;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    } */}

    .occupation {
      font-family: 'Oxanium', monospace;
      ${'' /* font-size: 45px; */}
      font-size: 5vw;
      color: rgb(157, 199, 217);
    }

    .occupation a {
      color: rgb(14, 236, 131);
    }

    p {
      ${'' /* border: 1px solid red; */}

      ${'' /* margin-left: 30px; */}
      width: 58%;
    }
  `;

  return (
    <div css={styling}>
      <h4 className="name-intro">Hi, my name is</h4>
      <h2 className="name">Adam Barton</h2>
      <h4 className="occupation-intro">and I am a</h4>
      <h3 className="occupation">Software Engineer at <a href="https://www.carbonblack.com/" target="_blank" rel="noopener noreferrer">Carbon Black (VMware)</a></h3>
      <p>I'm a software engineer from Portland, Oregon who enjoys building things of all kinds!</p>
    </div>
  );
}


export default Info;
