/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import SectionHeader from './SectionHeader.js';
import LinkItem from './LinkItem.js';
import WorkContent from './WorkContent.js';
import TechContent from './TechContent.js';


const WorkData = [
  {
    company: "Carbon Black",
    companylink: "https://www.carbonblack.com/",
    position: "Software Engineering Intern (MECOP)",
    location: "Hillsboro, Oregon",
    start: "June 2019",
    end: "December 2019",
    description: [
      "Organized and executed on a major build upgrade in order to improve code compilation time, enable use of spectre mitigation, and support the ARM64 architecture: Visual Studio 2015 -> 2017, Python2 -> Python3",
      "Added the ARM64 architecture to all parts of the Windows Sensor software stack including recompiling third party software for ARM64",
      "Implemented ARM64 cross-compilation build toolchains in Jenkins automation",
      "Refactored Jenkins builds in order to reduce build time and remove unnecessary re-builds",
    ],
    techAndTools: [
      "C++",
      "Python2/3",
      "MSBuild",
      "Jenkins",
      "Git",
      "SVN",
    ]
  },
  {
    company: "Mentor Graphics",
    companylink: "https://www.mentor.com/",
    position: "Software Engineering Intern (MECOP)",
    location: "Wilsonville, Oregon",
    start: "March 2018",
    end: "June 2019",
    description: [
      "Contributed to an internal test harness (graphical and command line) used by over 100 QA engineers daily",
      "Developed a regression test suite for the application and added ~300 tests",
      "Added over 80 pages of documentation about the application and test suite",
      "Identified, communicated, and resolved issues facing users while using the application",
      "Completed multiple refactorings which had user-facing impacts leading to a better user experience and more-readable code",
      "Architected and developed multi-threaded daemon to refactor decaying code and implement a new feature",
      "Optimized application experience for users to reduce down-time while using the application",
    ],
    techAndTools: [
      "TCL/TK",
      "Perl",
      "Python3",
      "SVN",
    ]
  },
  {
    company: "Oregon State University",
    companylink: "https://oregonstate.edu/",
    position: "CS 16X Teaching Assistant",
    location: "Corvallis, Oregon",
    start: "September 2017",
    end: "March 2018",
    description: [
      "Aided students in their learning of computer science through office hours and demo hours for introductory level CS courses",
      "Strengthened my own understanding of computer science topics through teaching and problem solving with students",
      "Gained valuable communication skills and understanding of how other students learn and problem solve different from mine",
    ],
    techAndTools: [
      "C++",
      "Haskell",
    ]
  }
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

      margin-top: 10px;

      width: 95%;
      ${'' /* height: 390px; */}
      height: 40vw;

      position: relative;
    }

    @media (min-width: 1300px) {
      .work.content-container {
        height: 21vw;
      }
    }

    .work .text-container {
      ${'' /* border: 1px solid green; */}

      position: absolute;
      right: 0px;
      top: 0px;
      width: 76%;

      ${'' /* flex-grow: 10; */}
      margin: 0px;
    }

    .link-container {
      ${'' /* border: 1px solid blue; */}

      position: absolute;
      left: 0px;
      top: 0px;
      width: 23%;

      ${'' /* flex-shrink: 10;
      min-width: 20%;
      flex-basis: auto; */}

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
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
    <div css={styling} id="work-anchor">
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
                          content={item.company} />);
              })
            }
          </div>
          <div className="text-container">
            <WorkContent content={WorkData[index]} />
            <TechContent content={WorkData[index]} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Work;
