/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { setCompressorShow } from './Redux/actions.js';
import { getCompressorShow } from './Redux/selectors.js';

import NavTitle from './NavTitle.js';
import NavItem from './NavItem.js';
import ArrowButton from './ArrowButton.js';


function NavBar(props) {
  const compressorShow = useSelector(getCompressorShow);

  const [ prevScrollPos, setPrevScrollPos ] = useState(null);
  const [ showNavBar, setShowNavBar ] = useState(true);

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

      transition: all 0.5s ease;
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

      transition: opacity 0.3s ease 0.2s;
    }

    .background.show {
      opacity: 100%;
      display: block;
    }

    .grower {
      ${'' /* border: 1px solid green; */}

      flex-grow: 4;
    }

    .title {
      margin-left: 10px;
    }


    .button-container {
      ${'' /* border: 1px solid red; */}

      width: 100%;
      ${'' /* height: 250px; */}

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    }

    .btn {
      border: none;
      border-radius: 1px;
      outline: none;

      display: block;
      padding: 12px 35px;
      ${'' /* margin: 0 auto; */}
      margin: 14px 0px;

      position: relative;

      text-align: center;
      text-transform: uppercase;
      color: rgb(255, 255, 255);
      font-size: 15px;
      font-weight: 700;
      background-color: rgb(6, 66, 111);
      overflow: hidden;

      cursor: pointer;

      transition: color 0.5s ease 0.15s;

      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.20);
    }

    .btn span {
      position: relative;
      z-index: 1;
    }

    .btn:after {
      content: "";

      position: absolute;
      left: 0;
      top: 0;
      height: 420%;
      width: 140%;

      background: rgb(14, 236, 131);

      transition: all .3s ease-in-out;
      ${'' /* transform: translateX(-98%) translateY(-25%) rotate(45deg); */}
    }

    .btn:hover {
      color: rgb(88, 88, 88);
    }

    .btn.btn1 {
      opacity: 0%;
      animation: fade-in 0.5s ease 0.3s forwards;
    }

    .btn.btn2 {
      opacity: 0%;
      animation: fade-in 0.5s ease 0.5s forwards;
    }

    .btn.btn1:after {
      height: 520%;
      width: 140%;
      transform: translateX(-90%) translateY(-25%) rotate(45deg);
    }

    .btn.btn2:after {
      ${'' /* height: 440%; */}
      width: 130%;
      transform: translateX(-98%) translateY(-25%) rotate(45deg);
    }

    .btn.btn1:hover:after {
      transform: translateX(-2%) translateY(-25%) rotate(45deg);
    }

    .btn.btn2:hover:after {
      transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }

    @media (min-width: 801px) {
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
        padding-top: 70px;

        width: 50%;
      }

      .grower {
        flex-grow: 0;
      }
    }


    @keyframes fade-in {
      from {
        opacity: 0%;
      }
      to {
        opacity: 100%;
      }
    }
  `;

  useEffect(() => {
    const handleScroll = () => {
      if (compressorShow) {
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
      <div className={compressorShow ? "arrow-container show" : "arrow-container"}>
        <ArrowButton action={compressorShow} setAction={setCompressorShow} />
      </div>
      <div className={compressorShow ? "background show" : "background"}></div>
      <div className={compressorShow ? "compressor show" : "compressor"}>
        <div className="grower"></div>
        <NavItem content="About Me" anchor="about-me-anchor" />
        <NavItem content="Work" anchor="work-anchor" />
        <NavItem content="Projects" anchor="projects-anchor" />
        {compressorShow ?
          <div className="button-container">
            <form action="https://stygain.github.io/northwestvision/" target="_blank">
              <button class="btn btn1"><span>Northwest Vision</span></button>
            </form>
            <form action="https://stygain.github.io/css-loaders/" target="_blank">
              <button class="btn btn2"><span>CSS Loaders</span></button>
            </form>
          </div>
        :
          <div></div>
        }
      </div>
    </div>
  );
}


export default NavBar;
