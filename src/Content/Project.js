/** @jsx jsx */
import { jsx, css } from '@emotion/core';
//eslint-disable-next-line
import React from 'react';

import ProjectTechContent from './ProjectTechContent.js';
import SourceButton from './SourceButton.js';

import ExternalLink from '../Images/ext-link.png';


function Project(props) {
  const styling = css`
    ${'' /* border: 1px solid orange; */}

    ${'' /* @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap'); */}
    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
    font-family: 'Ubuntu Mono', monospace;

    width: 360px;
    height: 360px;

    margin: 8px 8px;
    border-radius: 3px;

    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
    background-color: rgb(3, 53, 88);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    transition: transform 0.3s ease,
                box-shadow 0.3s ease;

    &:hover {
      ${'' /* margin-bottom: 20px; */}
      box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.75);
      transform: translateY(-3px);
    }

    .project-content {
      ${'' /* border: 1px solid yellow; */}

      width: 90%;
      height: 92%;
      padding-bottom: 10px;

      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    a.ext-link {
      ${'' /* border: 1px solid green; */}

      position: absolute;
      top: 0px;
      right: 0px;
      width: 30px;
      height: 30px;
    }

    .ext-img {
      ${'' /* border: 1px solid red; */}

      position: absolute;
      top: 0px;
      right: 0px;
      width: 30px;
      height: 30px;

      cursor: pointer;
    }

    .project-text-content {
      ${'' /* border: 1px solid red; */}

      min-height: 90%;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    .title-content-wrap {
      ${'' /* border: 1px solid green; */}

      min-height: 70%;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    h2 {
      ${'' /* border: 1px solid blue; */}

      color: rgb(235, 243, 249);
      font-size: 28px;

      ${'' /* margin: 0px 10px; */}
    }

    p.project-description {
      ${'' /* border: 1px solid orange; */}

      color: rgb(197, 208, 217);
      font-size: 18px;
      margin: 10px 0px;
    }

    .project-description a {
      color: rgb(14, 236, 131);
    }

    .source-code-button-container {
      ${'' /* border: 1px solid orange; */}

      ${'' /* margin-top: 10px; */}
      margin-bottom: 10px;
      padding: 8px 0px;

      text-align: center;
    }

    .source-code-button {
      border-radius: 5px;
      padding: 5px 8px;

      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
      border: none;

      background: rgb(7, 81, 135);
      box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
      background: linear-gradient(to bottom left, rgb(7, 101, 167), rgb(21, 74, 111));

      transition: box-shadow 0.3s ease;
    }

    .source-code-button:hover {
      box-shadow: 0px 3px 7px 0px rgba(10, 10, 10, 0.75);
    }

    @media (min-width: 1300px) {
    }

    @media (max-width: 800px) {
    }
  `;

  return (
    <div css={styling}>
      <div className="project-content">
        {props.content.link !== null ? <a className="ext-link" href={props.content.link} target="_blank" rel="noopener noreferrer"><img className="ext-img" src={ExternalLink} alt="External link" /></a> : <></>}
        <div className="project-text-content">
          <div className="title-content-wrap">
            <h2>{props.content.title}</h2>
            {props.content.description}
          </div>
          <ProjectTechContent content={props.content.technologies} />
        </div>
        <SourceButton source={props.content.source} />
      </div>
    </div>
  );
}


export default Project;
