/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function NavItem(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    margin-bottom: 3px;

    .blinky-box {
      width: 8px;
      height: 15px;

      background-color: rgba(255, 0, 0, 0);

      transition: background-color 0.2s ease;

      animation: ${props.hover ? "blink 0.5s alternate infinite" : ""};
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

    @media (max-width: 800px) {
      .blinky-box {
        width: 12px;
        height: 22px;
      }
    }
  `;

  return (
    <div css={styling}>
      <div className="blinky-box"></div>
    </div>
  );
}


export default NavItem;
