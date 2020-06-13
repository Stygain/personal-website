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
    title: "Northwest Vision",
    link: "https://stygain.github.io/northwestvision/",
    source: "https://github.com/Stygain/northwestvision",
    description: <p className="project-description">Just because you aren't a web developer doesn't mean you can't do some web development on the side :) I enjoy taking pictures on the side too. Check out some photos from my various trips. This is the third re-creation of this website (and I used React this time), check out <a href="https://github.com/Stygain/NVWebsite/" target="_blank" rel="noopener noreferrer">GitHub/NVWebsite</a> for my second iteration which used Handlebars.</p>,
    technologies: [
      "React",
      "Photography",
    ]
  },
  {
    title: "Load-Balanced Network",
    link: null,
    source: "https://github.com/Stygain/virtualizing-gridlock-throughput-opinion",
    description: <p className="project-description">A research project for a networking course. Initial implementations of our SDN used Mininet hence why Python was selected for the language. After frustrations with Mininet, we dropped Mininet and built our own network. Our network was used to compare different load balancing algorithms such as a priority-based weighted least-connections algorithm.</p>,
    technologies: [
      "Python",
      "Load Balancing",
    ]
  },
  {
    title: "CSS-Loaders",
    link: "https://stygain.github.io/css-loaders/",
    source: "https://github.com/Stygain/css-loaders",
    description: <p className="project-description">Got an itch to watch some CSS animations? Check out my <a href="https://stygain.github.io/css-loaders/" target="_blank" rel="noopener noreferrer">CSS-Loaders website</a> with heavy inspiration from <a href="https://tobiasahlin.com/spinkit/" target="_blank" rel="noopener noreferrer">Tobias Ahlin's Spinkit.</a> I love watching loading animations (when the loading animation is nice), so it was fun to create some of my own.</p>,
    technologies: [
      "React",
      "CSS",
    ]
  },
  {
    title: "Push Buttons",
    link: "https://stygain.github.io/push-buttons/",
    source: "https://stygain.github.io/push-buttons/",
    description: <p className="project-description">I hope you liked my css animations, but how about some interaction? My <a href="https://stygain.github.io/push-buttons/" target="_blank" rel="noopener noreferrer">Push Buttons website</a> provides just the satisfaction you desire! Buttons are just as fun to create as loading animations, with one of the designs used on this website.</p>,
    technologies: [
      "React",
      "CSS",
    ]
  },
  {
    title: "Fan-Controller",
    link: null,
    source: "https://github.com/Stygain/fan-controller",
    description: <p className="project-description">A side-project I implemented for my own desktop computer. I was annoyed by the sound of my fans and figured it would be a good learning experience to touch some hardware. I created a fan controller using an Arduino which displayed temperatures and an RSS feed and enabled fan control via an IR remote and a Windows-Forms app connected via a serial bus.</p>,
    technologies: [
      "Python",
      "Load Balancing",
    ]
  },
  {
    title: "Personal Website",
    link: null,
    source: "https://github.com/Stygain/personal-website",
    description: <p className="project-description">This is the source of the website you are looking at right now. Styling for this website was inspired by <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer">Brittany Chiang's website.</a></p>,
    technologies: [
      "React",
      "CSS",
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
