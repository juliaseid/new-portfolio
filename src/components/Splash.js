import React from "react";
import squareview from './../img/squareview.jpg';

function Splash(){
  return (
    <React.Fragment>
    <h2>This will be the splash page</h2>
    <img src={squareview} alt="lake in winter"></img>
    </React.Fragment>
  );
}

export default Splash;