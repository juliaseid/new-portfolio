import React from "react";
import squareview from './../img/squareview.jpg';
import '../styles/home.css';
import '../styles/app.css';
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
        <h3>About  |  Development Projects  |  Writing Portfolio  |  Blog</h3>
      </div>
    </React.Fragment>
  );
}

export default Splash;