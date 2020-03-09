/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export function ContentMargin(props) {
  const styling = css`
    ${'' /* border: 1px solid red; */}

    position: relative;
    ${'' /* margin-left: 70px; */}
    margin-left: 20px;

    max-width: 95%;
    
    margin-bottom: 10vh;
  `;

  return (
    <div css={styling}>
      {props.children}
    </div>
  );
}
