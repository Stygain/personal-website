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

    p {
      margin: 0px 30px;
    }
  `;

  return (
    <div css={styling}>
      <p>{props.content.description}</p>
    </div>
  );
}


export default Work;
