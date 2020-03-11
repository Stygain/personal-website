/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';

import NavTitle from './NavTitle.js';
import NavItem from './NavItem.js';
import ArrowButton from './ArrowButton.js';


function NavBar(props) {
  const [ prevScrollPos, setPrevScrollPos ] = useState(null);
  const [ showNavBar, setShowNavBar ] = useState(true);

  const [ showCompressor, setShowCompressor ] = useState(true);

  const styling = css`
    ${'' /* border: 1px solid green; */}

    @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap');
    font-family: 'Oxanium', monospace;

    ${'' /* border-bottom: 1px solid rgb(9, 62, 84); */}
    box-shadow: 0px 3px 5px 0px rgba(4, 45, 62, 0.78);
    padding: 15px 5px;
    background-color: rgb(0, 58, 83);
    z-index: 20;

    display: flex;
    flex-direction: row;
    align-items: baseline;

    position: fixed;
    top: 0;
    width: 100%;

    transition: top 0.3s;

    &.hide {
      top: -70px;
    }

    .arrow-container {
      position: absolute;
      top: 13px;
      right: 25px;

      ${'' /* margin-right: 25px;
      margin-top: 15px; */}

      z-index: 5;
    }

    .compressor {
      ${'' /* border: 1px solid red; */}

      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: baseline;

      z-index: 2;

      background-color: rgb(0, 58, 83);

      overflow-y: scroll;

      transition: all 0.8s ease;
    }

    .background {
      ${'' /* border: 1px solid blue; */}

      position: fixed;
      top: 0px;
      left: 0px;

      height: 100%;
      width: 100%;
      ${'' /* width: 0; */}
      opacity: 0%;
      display: none;

      z-index: 1;

      background-color: rgba(0, 0, 0, 0.16);

      transition: opacity 0.5s ease 0.3s;
    }

    .background.show {
      opacity: 100%;
      display: block;
    }

    .grower {
      border: 1px solid green;

      flex-grow: 4;
    }

    .title {
      margin-left: 10px;
    }

    @media (min-width: 800px) {
      .arrow-container {
        display: none;
      }
    }

    @media (max-width: 800px) {
      .compressor {
        position: fixed;
        top: 0px;
        right: 0px;

        overflow: hidden;
        width: 0px;
        height: 100%;

        flex-direction: column;
        align-items: center;
      }

      .compressor.show {
        ${'' /* top: 70px; */}
        padding-top: 100px;

        width: 50%;
      }

      .grower {
        flex-grow: 0;
      }
    }
  `;

  useEffect(() => {
    const handleScroll = () => {
      if (showCompressor) {
        setShowNavBar(true);
        return;
      }
      var currentScrollPos = window.pageYOffset;
      // console.log(currentScrollPos);
      if (prevScrollPos === null) {
        setPrevScrollPos(currentScrollPos);
      } else {
        if (prevScrollPos > currentScrollPos) {
          setShowNavBar(true);
        } else {
          setShowNavBar(false);
        }
        setPrevScrollPos(currentScrollPos);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return(() => window.removeEventListener("scroll", handleScroll));
  })

  return (
    <div css={styling} className={showNavBar ? "navbar" : "navbar hide"}>
      <NavTitle id="home" />
      <div className={showCompressor ? "arrow-container show" : "arrow-container"}>
        <ArrowButton action={showCompressor} setAction={setShowCompressor} />
      </div>
      <div className={showCompressor ? "background show" : "background"}></div>
      <div className={showCompressor ? "compressor show" : "compressor"}>
        <div className="grower"></div>
        <NavItem content="About Me" anchor="about-me-anchor" />
        <NavItem content="Work" anchor="work-anchor" />
        <NavItem content="Projects" anchor="projects-anchor" />
      </div>
    </div>
  );
}


export default NavBar;
