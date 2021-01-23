import React, { useState } from "react";
import backgroundImage from "../images/Scene.png";
import deliveriesData from "../Data/deliveries.json";
import DeliveriesList from "./DeliveriesList";
import DeliveryForm from "./DeliveryForm";

const LayoutImage = () => {
  const [delivery, setDelivery] = useState(deliveriesData);

  const deleteDelivery = (id) => {
    setDelivery(delivery.filter((delivery) => delivery.id !== id));
  };

  const addDelivery = (nextId, date, name, city) => {
    let id = nextId(delivery);
    setDelivery([...delivery, { id: id, date: date, name: name, city: city }]);
  };

  const updateDelivery = (id) => {
    
  }

  const nextId = (delivery) => {
    let max = delivery.reduce(
      (prev, curr) => (prev.id > curr.id ? prev.id : curr.id),
      0
    );
    return ++max;
  };

  return (
    <div id="backgroundimage">
      <img
        src={backgroundImage}
        alt="backgroundImage"
        style={{ width: 1285, height: 800 }}
      />
      <DeliveriesList deliveryInfo={delivery} deleteDelivery={deleteDelivery} />
      <DeliveryForm addDelivery={addDelivery} nextId={nextId} />
      {/* <div>{this.props.children}</div> */}
    </div>
  );
};

export default LayoutImage;
