/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function SourceButton(props) {
  const styling = css`
    ${'' /* border: 1px solid orange; */}

    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
    font-family: 'Ubuntu Mono', monospace;

    margin-bottom: 10px;
    padding: 8px 0px;

    text-align: center;

    .btn {
      border: none;
      border-radius: 1px;
      outline: none;

      display: block;
      padding: 12px 35px;
      margin: 0 auto;

      position: relative;

      text-align: center;
      text-transform: uppercase;
      color: rgb(255, 255, 255);
      font-size: 15px;
      font-weight: 700;
      background-color: rgb(6, 66, 111);
      overflow: hidden;

      cursor: pointer;

      transition: color 0.5s ease 0.15s;

      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);
    }

    .btn span {
      position: relative;
      z-index: 1;
    }

    .btn:after {
      content: "";

      position: absolute;
      left: 0;
      top: 0;
      height: 420%;
      width: 140%;

      background: rgb(14, 236, 131);

      transition: all .5s ease-in-out;
      transform: translateX(-98%) translateY(-25%) rotate(45deg);
    }

    .btn:hover {
      color: rgb(88, 88, 88);
    }

    .btn:hover:after {
      transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }
  `;

  return (
    <div css={styling}>
      <form action={props.source} target="_blank">
        <button class="btn"><span>&#60;Source /&#62;</span></button>
      </form>
    </div>
  );
}


export default SourceButton;
