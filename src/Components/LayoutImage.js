import React, { useEffect, useState } from "react";
import backgroundImage from "../images/Scene.png";
import deliveriesData from "../Data/deliveries.json";
import DeliveriesList from "./DeliveriesList";
import DeliveryForm from "./DeliveryForm";

const LayoutImage = () => {
  const [deliveryInfo, setDeliveryInfo] = useState("");
  const [deliveries, setDelivery] = useState(deliveriesData);

  const deleteDelivery = (id) => {
    setDelivery(deliveries.filter((delivery) => delivery.id !== id));
  };

  const addDelivery = (nextId, date, name, city) => {
    let id = nextId(deliveries);
    setDelivery([
      ...deliveries,
      { id: id, date: date, name: name, city: city },
    ]);
  };

  const getDeliveryInfo = (delivery) => {
    setDeliveryInfo(delivery);
  };

  const updateDelivery = (deliveryInfo, id) => {
    setDelivery(
      deliveries.map((item) => (item.id === id ? deliveryInfo : item))
    );
  };

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
        style={{ width: 1285, height: 800, position: "relative" }}
      />
      <DeliveriesList
        deliveryInfo={deliveries}
        deleteDelivery={deleteDelivery}
        getDeliveryInfo={getDeliveryInfo}
      />
      <DeliveryForm
        addDelivery={addDelivery}
        nextId={nextId}
        deliveryInfo={deliveryInfo}
        updateDelivery={updateDelivery}
      />
    </div>
  );
};

export default LayoutImage;
