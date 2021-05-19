import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import About from './About';
import Blog from './Blog';
import Splash from './Home';
import Projects from './Projects';
import Writing from './Writing';


function Header(){
  return (
    <BrowserRouter>
        <Route exact path="/" component={Splash} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="projects" component={Projects} />
        <Route path="/writing" component={Writing} />

      <div id="navbar">
      <Link to='/'>
          <h3 id="headline">Julia Seidman </h3>
          <h5>Developer | Writer | Educator</h5>
        </Link>
      
        <div id="links"> 
          <Link to="/writing">Writing Portfolio  </Link>
          <Link to="/projects">Projects </Link>
          <Link to="/about">About Me  </Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
  </BrowserRouter>
  );
}

export default Header;