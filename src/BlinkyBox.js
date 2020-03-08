/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';


function NavItem(props) {
  const [ blink, setBlink ] = useState(true);

  const styling = css`
    ${'' /* border: 1px solid green; */}

    margin-bottom: 3px;

    .blinky-box {
      width: 8px;
      height: 15px;

      background-color: rgba(255, 0, 0, 0);

      transition: background-color 0.2s ease;
    }

    .blinky-box.color {
      background-color: rgb(236, 236, 236);
    }
  `;

  function blinky() {
    setBlink(!blink);
    // console.log("BLINK");
    // console.log(blink)
  };

  useEffect(() => {
    if (props.hover) {
      var intervalId = setInterval(
        () => blinky(),
        500
      );

      return function cleanup () {
        clearInterval(intervalId);
      }
    }
  }, [props.hover, blink]);

  return (
    <div css={styling}>
      <div className={blink ? "blinky-box color" : "blinky-box"}></div>
    </div>
  );
}


export default NavItem;
