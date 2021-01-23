import React from "react";
// import Delivery from "./Delivery";
import { Fab } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./DeliveriesList.css";

const DeliveryList = ({ deliveryInfo, deleteDelivery, addDelivery, getDeliveryInfo }) => {
  
  const eachDelivery = (deliveryInfo, i) => {
    return (
      <div className="row">
        <span style={{ marginLeft: "24px" }}>
          <p style={{ marginLeft: "13px", width: "24px", height: "38px" }}>
            {i + 1}
          </p>
          <p>{deliveryInfo[i].date}</p>
          <p>{deliveryInfo[i].name}</p>
          <p>{deliveryInfo[i].city}</p>
        </span>
        <div
          style={{
            marginLeft: "23px",
            display: "inline",
            width: "83px",
            height: "36px",
          }}
        >
          <Fab
            style={{ height: "32px", width: "32px" }}
            size="small"
            color="secondary"
            aria-label="edit"
            onClick={() => getDeliveryInfo(deliveryInfo[i])}
            variant="round"
          >
            <EditIcon />
          </Fab>
          <Fab
            style={{ height: "32px", width: "32px" }}
            size="small"
            color="secondary"
            aria-label="Delete"
            onClick={() => deleteDelivery(deliveryInfo[i].id)}
            variant="round"
          >
            <DeleteIcon />
          </Fab>
        </div>
      </div>
    );
  };
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
      {deliveryInfo.map((delivery, i) => eachDelivery(deliveryInfo, i))}
    </div>
  );
};

export default DeliveryList;
