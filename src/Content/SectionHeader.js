/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function SectionHeader(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    ${'' /* @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap'); */}
    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
    font-family: 'Ubuntu Mono', monospace;

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
      margin-left: ${props.margin}px;

      background-color: rgba(4, 45, 62, 0.78);
    }
  `;

  return (
    <div css={styling}>
      <h1 className="section-header">{props.content}</h1>
    </div>
  );
}


export default SectionHeader;
