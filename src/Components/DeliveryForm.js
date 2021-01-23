import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const style = {
  button: {
    marginLeft: "30%",
    width: 158,
    height: 60,
  },
  input: {
    display: "block",
    marginBottom: "1%",
    width: 400,
    height: 60,
    borderRadius: 3,
  },
};
const DeliveryForm = ({ deliveryInfo, addDelivery, nextId }) => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDelivery(nextId,date, name, city);
  };

  return (
    <div className="deliveryForm" >
      <form style={{ position: "absolute", left: "813px", top: "45px" }}>
        <input
          type="text"
          style={style.input}
          placeholder="01.01.2021"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          style={style.input}
          placeholder="John Doe"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          style={style.input}
          placeholder="Tel Aviv"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          value="addDelivery"
          style={style.button}
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default DeliveryForm;
