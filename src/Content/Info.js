/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function Info(props) {
  const styling = css`
    border: 1px solid green;

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
      color: rgb(209, 209, 209);
    }

    .name {
      font-family: 'Oxanium', monospace;
      font-size: 65px;
    }

    .occupation-container {
      ${'' /* border: 1px solid red; */}

      font-family: 'Oxanium', monospace;

      width: 80%;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    .occupation {
      color: rgb(226, 226, 226);
    }

    .occupation a {
      color: rgb(14, 236, 131);
    }

    p {
      border: 1px solid red;

      margin-left: 30px;
      width: 58%;
    }
  `;

  return (
    <div css={styling}>
      <h4 className="name-intro">Hi, I am</h4>
      <h2 className="name">Adam Barton</h2>
      <div className="occupation-container">
        <h3 className="occupation">Software Engineer at <a href="https://www.carbonblack.com/">Carbon Black</a></h3>
      </div>
      <p>Some information about me in a paragraph form</p>
    </div>
  );
}


export default Info;
