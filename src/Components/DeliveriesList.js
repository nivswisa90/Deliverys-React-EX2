import React, { Component } from "react";
import "./DeliveriesList.css";
// import {MdDelete, MdEdit,MdSave} from 'react-icons/md';
import deliveriesData from "../Data/deliveries.json";
import Delivery from "../Components/Delivery";
import { Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
// import Container from "@material-ui/core/Container";

class DeliveriesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deliveries: [],
    };
    this.eachDelivery = this.eachDelivery.bind(this);
    this.add = this.add.bind(this);
    this.nextId = this.nextId.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);

    // this.renderUI = this.renderUI.bind(this);
    // this.renderForm = this.renderForm.bind(this);
  }

  componentDidMount() {
    deliveriesData.map((item) =>
      this.add({
        id: item.id,
        date: item.date,
        name: item.name,
        city: item.city,
      })
    );
  }

  nextId(deliveries = []) {
    let max = deliveries.reduce(
      (prev, curr) => (prev.id > curr.id ? prev.id : curr.id),
      0
    );
    return ++max;
  }

  delete(id) {
    //Returns an array that will remove the item where is true
    this.setState((prevState) => ({
      deliveries: prevState.deliveries.filter((delivery) => delivery.id !== id),
    }));
  }

  update(newDelivery, i) {
    console.log(`Update ${i}: newDelivery: ${newDelivery}`);
    this.setState((prevState) => ({
      ideas: prevState.deliveries.map((delivery) =>
        delivery.id !== i ? delivery : { ...delivery, delivery: newDelivery }
      ),
    }));
  }

  add({
    id = null,
    date = "default date",
    name = "default name",
    city = "default city",
  }) {
    this.setState((prevState) => ({
      deliveries: [
        ...prevState.deliveries,
        {
          id: id !== null ? id : this.nextId(prevState.deliveries),
          date: date,
          name: name,
          city: city,
        },
      ],
    }));
  }

  eachDelivery(item, i) {
    return (
      <Delivery
        key={i}
        index={item.id}
        onChange={this.update}
        onDelete={this.delete}
      >
        {/* <Container maxWidth="sm"> */}
        <div className="deliverieslist">
          <span style={{ marginLeft: "24px" }}>
            <p style={{ marginLeft: "13px", width: "24px", height: "38px" }}>
              {i + 1}
            </p>
            <p>{item.date}</p>
            <p>{item.name}</p>
            <p>{item.city}</p>
          </span>
          <div
            style={{
              marginLeft:"58px",
              display: "inline",
              width: "83px",
              height: "36px",
            }}
          >
            <Fab
              style={{height: "32px", width: "32px" }}
              size="small"
              color="secondary"
              aria-label="edit"
              onClick={() => this.update(item.id)}
              variant="round"
            >
              <EditIcon />
            </Fab>
            <Fab
              style={{ height: "32px", width: "32px" }}
              size="small"
              color="secondary"
              aria-label="Delete"
              onClick={() => this.delete(item.id)}
              variant="round"
            >
              <DeleteIcon />
            </Fab>
          </div>
        </div>
        {/* </Container> */}
      </Delivery>
    );
  }

  render() {
    return (
      <div
        className="delivery-list"
        style={{
          border: "1px solid",
          borderRadius: "10px",
          width: "550px",
          height: "594px",
          position: "absolute",
          left: "16%",
          top: "5%",
          background: "white",
        }}
      >
        {this.state.deliveries.map(this.eachDelivery)}
        {/* <button onClick={this.add}><MdAdd/></button> */}
      </div>
    );
  }
  // edit() {
  //     this.setState({
  //       editing: true,
  //     });
  //   }
}

export default DeliveriesList;
