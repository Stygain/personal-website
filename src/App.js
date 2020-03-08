import React from 'react';

import NavBar from './NavBar.js';
import SideBar from './SideBar.js';
import Info from './Content/Info.js';
import { ContentMargin } from './Utils.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <ContentMargin>
        <Info />
      </ContentMargin>
    </div>
  );
}

export default App;
