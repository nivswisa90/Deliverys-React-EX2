import React, { Component } from "react";
import truck from '../images/mobel.png';

// import {MdDelete, MdEdit,MdSave} from 'react-icons/md';

class Layout extends Component {
  // constructor(props){
  //     super(props);

  // this.state = {
  //     editing: false,
  // };
  // this.edit = this.edit.bind(this);
  // this.save = this.save.bind(this);
  // this.delete = this.delete.bind(this);

  // this.renderUI = this.renderUI.bind(this);
  // this.renderForm = this.renderForm.bind(this);
  // }
  render() {
    return (
      <div id="truckImage" >
        <img src={truck} alt="backgroundImage" style={{ position:"absolute", width:811, height:394.55,left:"0%", right:"49.44%", top:"65.38%"}}/>
        {/* <div>{this.props.children}</div> */}
      </div>
    );
  }
  // edit() {
  //     this.setState({
  //       editing: true,
  //     });
  //   }
}

export default Layout;
