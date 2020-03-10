/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState, useEffect } from 'react';

import NavTitle from './NavTitle.js';
import NavItem from './NavItem.js';


function NavBar(props) {
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

    .grower {
      flex-grow: 4;
    }

    .title {
      margin-left: 10px;
    }
  `;

  useEffect(() => {
    const handleScroll = () => {
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
      <div className="grower"></div>
      <NavItem content="About Me" anchor="about-me-anchor" />
      <NavItem content="Work" anchor="work-anchor" />
      <NavItem content="Projects" anchor="projects-anchor" />
    </div>
  );
}


export default NavBar;
