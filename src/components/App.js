import React from "react";
// import SiteControl from 'sitecontrol.js';
import Header from "./Header";
import Splash from './Splash';
import About from './About';
import Blog from './Blog';
import Portfolio from './Portfolio';

function App(){
  return (
    <React.Fragment>
      <Splash />
      <Header />
      <About />
      <Portfolio />
      <Blog />
    </React.Fragment>
  );
}

export default App;