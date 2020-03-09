/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function NavTitle(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    display: flex;
    flex-direction: row;
    align-items: baseline;

    @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap');
    font-family: 'Oxanium', monospace;
    max-height: 50px;

    .title {
      margin-left: 10px;

      width: 0px;
      overflow: hidden;
      white-space: nowrap;
      user-select: none;

      animation: type 1s linear forwards 0.6s;
    }

    .block {
      width: 15px;
      height: 25px;

      background-color: rgba(255, 255, 255, 1);

      animation: blink 0.5s alternate infinite 2s;
    }

    @keyframes blink {
      0% {
        background-color: rgba(255, 255, 255, 1);
      }
      49% {
        background-color: rgba(255, 255, 255, 1);
      }
      50% {
        background-color: rgba(255, 255, 255, 0);
      }
      100% {
        background-color: rgba(255, 255, 255, 0);
      }
    }


    @keyframes type {
      0% {
        width: 0px;
      }
      8.09% {
        width: 0px;
      }
      9.09% {
        width: 20px;
      }
      17.18% {
        width: 20px;
      }
      18.18% {
        width: 40px;
      }
      26.27% {
        width: 40px;
      }
      27.27% {
        width: 60px;
      }
      35.36% {
        width: 60px;
      }
      36.36% {
        width: 85px;
      }
      44.45% {
        width: 85px;
      }
      45.45% {
        width: 95px;
      }
      53.54% {
        width: 95px;
      }
      54.54% {
        width: 115px;
      }
      62.63% {
        width: 115px;
      }
      63.63% {
        width: 137px;
      }
      71.72% {
        width: 137px;
      }
      72.72% {
        width: 150px;
      }
      80.81% {
        width: 150px;
      }
      81.81% {
        width: 160px;
      }
      89.9% {
        width: 160px;
      }
      90.9% {
        width: 180px;
      }
      99% {
        width: 180px;
      }
      100% {
        width: 200px;
      }
    }
  `;

  return (
    <div css={styling}>
      <h1 className="title">Adam Barton</h1>
      <div className="block"></div>
    </div>
  );
}


export default NavTitle;
