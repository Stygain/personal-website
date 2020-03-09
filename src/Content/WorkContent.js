/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function Work(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    p {
      margin: 0px 30px;
    }
  `;

  return (
    <div css={styling}>
      <p>{props.content.description}</p>
    </div>
  );
}


export default Work;
