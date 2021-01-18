import React, { Component } from "react";
// import {MdDelete, MdEdit,MdSave} from 'react-icons/md';
import Button from "@material-ui/core/Button";
class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.delete = this.delete.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }
  edit() {
    this.setState({
      editing: true,
    });
  }

  delete() {
    this.props.onDelete(this.props.index);
  }

  save(e) {
    e.preventDefault();

    this.props.onChange(this.newDelivery.value, this.props.index);

    this.setState({
      editing: false,
    });
  }

  inputChanged({ target: { value: text } }) {
    this.setState({
      newDelivery: text,
    });
  }
  button = {
    marginLeft: "30%",
    width: "158px",
    height: "60px",
  };
  textarea = {
    display: "block",
    marginBottom: "1%",
    width: "400px",
    height: "60px",
    borderRadius: "5px",

  };
  render() {
    return (
      <div className="deliveryForm">
        <form style={{ position: "absolute", left: "704px", top: "45px" }}>
          {/* <textarea ref={(input) => (this.newIdea = input)} /> */}
          {/* <textarea onChange={this.inputChanged} value={this.state.newIdea}/> */}
          <textarea
            onChange={this.inputChanged}
            value={this.state.newDelivery}
            style={this.textarea}
            placeholder="01.01.2021"
          />
          <textarea
            onChange={this.inputChanged}
            value={this.state.newDelivery}
            style={this.textarea}
            placeholder="John Doe"
          />
          <textarea
            onChange={this.inputChanged}
            value={this.state.newDelivery}
            style={this.textarea}
            placeholder="Tel Aviv"
          />
          {/* onClick={this.save} */}
          <Button
            onClick={this.save}
            style={this.button}
            variant="contained"
            color="secondary"
          >
            Save
          </Button>
        </form>
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
