/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export function ContentMargin(props) {
  const styling = css`
    ${'' /* border: 1px solid red; */}

    position: relative;
    margin-left: 70px;

    max-width: 85%;
  `;

  return (
    <div css={styling}>
      {props.children}
    </div>
  );
}
