import React, { Component } from "react";
import backgroundImage from '../images/Scene.png';
import DeliveriesList from './DeliveriesList';
import SaveDeliveryForm from './SaveDeliveryForm';
import Truck from './Truck';
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
      <div id="backgroundimage" >
        <img src={backgroundImage} alt="backgroundImage" style={{ width:1285, height:800}}/>
        <DeliveriesList/>
        <SaveDeliveryForm/>
        <Truck/>
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
