import React, { Component } from "react";
import truck from '../images/mobel.png';

class Layout extends Component {
  render() {
    return (
      <div id="truckImage" >
        <img src={truck} alt="backgroundImage" style={{ position:"absolute", width:811, height:394.55,left:"-18%", right:"30%", top:"81%"}}/>
      </div>
    );
  }
}

export default Layout;
