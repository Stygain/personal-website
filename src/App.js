/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import NavBar from './NavBar.js';
import SideBar from './SideBar.js';
import Info from './Content/Info.js';
import Personal from './Content/Personal.js';
import Work from './Content/Work.js';
import Projects from './Content/Projects.js';
import { Centering, ContentMargin } from './Utils.js';

function App() {
  const styling = css`
    ${'' /* border: 1px solid green; */}
  `;

  return (
    <div className="App" css={styling}>
      <NavBar />
      <SideBar />
      <Centering>
        <ContentMargin>
          <Info />
          <Personal />
          <Work />
          <Projects />
        </ContentMargin>
      </Centering>
    </div>
  );
}

export default App;
