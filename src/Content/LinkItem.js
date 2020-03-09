/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function LinkItem(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    h5 {
      font-size: 20px;
      color: rgb(157, 199, 217);

      transition: color 0.3s ease;
    }

    & {
      border: 1px solid green;

      padding: 10px 20px;
      padding-left: 25px;

      cursor: pointer;

      background-color: rgb(0, 58, 83);

      transition: background-color 0.2s ease;
    }

    &:hover {
      background-color: rgb(7, 75, 105);

      h5 {
        color: rgb(14, 236, 131);
      }
    }
  `;

  return (
    <div css={styling}>
      <h5>{props.content}</h5>
    </div>
  );
}


export default LinkItem;
