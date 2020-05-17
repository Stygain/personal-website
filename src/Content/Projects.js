/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import SectionHeader from './SectionHeader.js';
import Project from './Project.js';


const ProjectData = [
  {
    title: "Bandwidth Monitor",
    link: null,
    source: "https://github.com/Stygain/bandwidth-monitor",
    description: <p className="project-description">I had always wondered how full screen terminal applications were created. Being a commandline lover, when I discovered ncurses I just had to come up with a project to implement. I came up with this high-level network monitoring terminal application for Linux! Check out some gifs on GitHub.</p>,
    technologies: [
      "ncurses",
      "c++",
      "sysfs",
    ]
  },
  {
    title: "CSS-Loaders",
    link: "https://stygain.github.io/css-loaders/",
    source: "https://github.com/Stygain/css-loaders",
    description: <p className="project-description">Got an itch to watch some CSS animations? Check out my <a href="https://stygain.github.io/css-loaders/" target="_blank" rel="noopener noreferrer">CSS-Loaders website</a> with heavy inspiration from <a href="https://tobiasahlin.com/spinkit/" target="_blank" rel="noopener noreferrer">Tobias Ahlin's Spinkit.</a></p>,
    technologies: [
      "React",
      "CSS",
    ]
  },
  {
    title: "Northwest Vision",
    link: "https://stygain.github.io/northwestvision/",
    source: "https://github.com/Stygain/northwestvision",
    description: <p className="project-description">Just because you aren't a web developer doesn't mean you can't do some web development on the side :) I enjoy taking pictures on the side too. Check out some photos from my various trips.</p>,
    technologies: [
      "React",
      "Photography",
    ]
  },
  {
    title: "Software-Defined Load-Balanced Network",
    link: null,
    source: "https://github.com/Stygain/virtualizing-gridlock-throughput-opinion",
    description: <p className="project-description">A research project I implemented (along with one other student) to create a load balanced network and use it to compare various algorithms used.</p>,
    technologies: [
      "Python",
      "Load Balancing",
    ]
  },
  {
    title: "Fan-Controller",
    link: null,
    source: "https://github.com/Stygain/fan-controller",
    description: <p className="project-description">A side-project I implemented for my own desktop computer. I was annoyed by the sound of my fans and figured it would be a good learning experience to touch some hardware. I created a fan controller using an Arduino which displayed temperatures and an RSS feed and enabled fan controll from an IR remote and a Windows-Forms app.</p>,
    technologies: [
      "Python",
      "Load Balancing",
    ]
  },
]

function Projects(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    margin-top: 50vh;

    ${'' /* @import url('https://fonts.googleapis.com/css?family=Oxanium&display=swap'); */}
    @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap');
    font-family: 'Ubuntu Mono', monospace;

    display: flex;
    flex-direction: column;

    .projects.content-container {
      ${'' /* border: 1px solid red; */}

      width: 100%;
      margin-top: 15px;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }


    p {
      margin: 0px 30px;
    }

    @media (min-width: 1300px) {
      .projects.content-container {
        ${'' /* height: 21vw; */}
      }
    }

    @media (max-width: 800px) {
      .work.content-container {
        ${'' /* height: 69vw; */}
      }
    }
  `;

  return (
    <div css={styling} id="projects-anchor">
      <SectionHeader content="Projects" margin="140" />
      <div className="projects-centerer">
        <div className="projects content-container">
          {
            ProjectData.map((item) => {
              return (<Project content={item} />);
            })
          }
        </div>
      </div>
    </div>
  );
}


export default Projects;
