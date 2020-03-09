/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import ProfilePhoto from '../Images/IMG_0774-cut-crop-reducedres.jpg';


function ImageContainer(props) {
  const [ hover, setHover ] = useState(false);

  const styling = css`
    ${'' /* border: 1px solid green; */}

    width: calc(38vw - 3px + 25px);
    height: calc(((38vw - 3px) * 1.250723) + 25px);
    max-width: 497px;
    max-height: calc((500px - 3px) * 1.250723);

    position: relative;

    img {
      position: absolute;
      top: 0px;
      left: 0px;

      z-index: 3;

      width: 38vw;
      max-width: 500px;
      border-radius: 10px;
    }

    .img-border {
      position: absolute;

      height: calc((38vw - 3px) * 1.250723);
      width: calc(38vw - 3px);
      max-width: 497px;
      max-height: calc((500px - 3px) * 1.250723);

      border-radius: 10px;
      border: 3px solid rgba(255, 255, 255, 1);
    }

    .border {
      transition: border 0.6s ease 0.4s;

      border: ${hover ? "3px solid rgb(157, 199, 217)" : "3px solid rgb(19, 92, 124)"};
      z-index: 4;
    }

    .border-1 {
      top: 10px;
      left: 10px;
      z-index: 2;

      transition: border 0.6s ease 0.2s;

      border: ${hover ? "3px solid rgb(157, 199, 217)" : "3px solid rgb(19, 92, 124)"};
    }

    .border-2 {
      top: 20px;
      left: 20px;
      z-index: 1;

      transition: border 0.6s ease;

      border: ${hover ? "3px solid rgb(157, 199, 217)" : "3px solid rgb(19, 92, 124)"};
    }
  `;

  return (
    <div css={styling}
      onMouseEnter={
        () => {
          setHover(true);
        }
      }
      onMouseLeave={
        () => {
          setHover(false);
        }
      }>
      <img src={ProfilePhoto} alt="Me" />
      <div className="img-border border"></div>
      <div className="img-border border-1"></div>
      <div className="img-border border-2"></div>
    </div>
  );
}


export default ImageContainer;
