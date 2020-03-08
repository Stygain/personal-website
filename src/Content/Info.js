/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function Info(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    margin-top: 40px;

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
      color: rgb(144, 160, 167);
    }

    .name {
      font-family: 'Oxanium', monospace;
      font-size: 72px;
    }

    .occupation-container {
      border: 1px solid red;

      width: 80%;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    .occupation {
      font-family: 'Oxanium', monospace;
      font-size: 45px;
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
      <h4 className="name-intro">Hi, I am</h4>
      <h2 className="name">Adam Barton</h2>
      {/* <div className="occupation-container"> */}
        <h3 className="occupation">Software Engineer at <a href="https://www.carbonblack.com/">Carbon Black</a></h3>
      {/* </div> */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  );
}


export default Info;
