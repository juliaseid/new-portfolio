import React from "react";
import squareview from './../img/squareview.jpg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 


function Splash(){
  const floatStyle = {
    position: 'relative',
    textAlign: 'center',
    display: 'block', 
    maxWidth: '60%', 
    height: 'auto', 
    marginLeft:'auto', 
    marginRight:'auto',
    marginTop: '50px',
    marginBottom: '50px',
  }
  const imageStyle = {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto', 
    boxShadow: '18px 18px 18px 18px #333232'
  }
  const nameStyle = {
    fontFamily: 'Josefin Slab',
    fontWeight: 'bold',
    size: 36,
    position: 'absolute',
    marginTop: 35,
    marginLeft: 30,
  }
  const taglineStyle = {
    fontFamily: 'Josefin Slab',
    fontWeight: 'bold',
    size: 28,
    position: 'absolute',
    marginTop: 80,
    marginLeft: 30,
  }
  const linksStyle = {
    // fontFamily: 'Josefin Sans',
    // fontWeight: 'bold',
    // size: 36,
    position: 'absolute',
    marginLeft: 30,
    marginTop: 600,
    color: '#f8e9e4',
  }
  return (
    <React.Fragment>
      <div style={floatStyle}>
        <img src={squareview} style={imageStyle} alt="lake Wenatchee in winter"></img>
        <h1 style={nameStyle}>Julia Seidman</h1>
        <h2 style={taglineStyle}>Developer | Writer | Educator</h2>
        <h3 style={linksStyle}>About  |  Development Projects  |  Writing Portfolio  |  Blog</h3>
      </div>
    </React.Fragment>
  );
}

export default Splash;