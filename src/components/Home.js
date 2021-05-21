import React from "react";
import '../styles/home.css';
import '../styles/app.css';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';
import Writing from './Writing';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 


function Splash(){

  return (
    <React.Fragment>
      <div className="float">
        {/* <img src={squareview} alt="lake Wenatchee in winter"></img> */}
        <div className='headerBlock'>
          <h1>Julia Seidman</h1>
          <h2>Developer | Writer | Educator</h2>
        </div>
        <div id="linkSection">
          <BrowserRouter>
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="projects" component={Projects} />
            <Route path="/writing" component={Writing} />
            <Link to="/about">About    |</Link><Link to="/projects">    Development Projects    |</Link><Link to="/writing">    Writing Portfolio    |</Link><Link to="/blog">    Blog    </Link>
          </BrowserRouter>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Splash;