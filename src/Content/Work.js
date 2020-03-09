/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import SectionHeader from './SectionHeader.js';
import LinkItem from './LinkItem.js';
import WorkContent from './WorkContent.js';


const WorkData = [
  {
    title: "link1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    title: "link2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
]

function Work(props) {
  const [ index, setIndex ] = useState(0);

  const styling = css`
    ${'' /* border: 1px solid green; */}

    margin-top: 50vh;

    ${'' /* @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap'); */}
    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
    font-family: 'Ubuntu Mono', monospace;

    display: flex;
    flex-direction: column;

    .work-centerer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .work.content-container {
      ${'' /* border: 1px solid red; */}

      width: 80%;

      display: flex;
      flex-direction: row;
    }

    .work .text-container {
      ${'' /* border: 1px solid green; */}

      margin: 0px;
    }

    .link-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    h5 {
      font-size: 20px;
      color: rgb(157, 199, 217);

      user-select: none;

      transition: color 0.3s ease;
    }

    .link-box {
      ${'' /* border: 1px solid green; */}

      padding: 10px 20px;
      padding-left: 25px;

      cursor: pointer;

      background-color: rgb(0, 58, 83);

      transition: background-color 0.2s ease;
    }

    .link-box:hover {
      background-color: rgb(7, 75, 105);

      h5 {
        color: rgb(14, 236, 131);
      }
    }

    p {
      margin: 0px 30px;
    }
  `;

  return (
    <div css={styling}>
      <SectionHeader content="Work" margin="75" />
      <div className="work-centerer">
        <div className="work content-container">
          <div className="link-container">
            {
              WorkData.map((item, i) => {
                return (<LinkItem
                          index={index}
                          setIndex={setIndex}
                          id={i}
                          key={i}
                          content={item.title} />);
              })
            }
          </div>
          <div className="text-container">
            <WorkContent content={WorkData[index]} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Work;
