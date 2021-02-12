import React from "react";
import InnerControl from 'innercontrol.js';
import Splash from 'splash.js';

function SiteControl(){
  return (
    <React.Fragment>
      <Splash />
      <InnerControl />
    </React.Fragment>
  );
}

export default SiteControl;