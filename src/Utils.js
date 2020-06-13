/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export function ContentMargin(props) {
  const styling = css`
    ${'' /* border: 1px solid black; */}

    position: relative;
    ${'' /* margin-left: 70px; */}
    margin-left: 20px;

    max-width: 85%;

    margin-bottom: 10vh;

    @media (min-width: 1300px) {
      max-width: 1150px;
    }

    @media (max-width: 800px) {
      max-width: 100%;
      margin-left: 0px;
    }
  `;

  return (
    <div css={styling}>
      {props.children}
    </div>
  );
}

export function Centering(props) {
  const styling = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div css={styling}>
      {props.children}
    </div>
  );
}
