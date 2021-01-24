import React, { useState} from "react";
import Button from "@material-ui/core/Button";

const style = {
  button: {
    marginLeft: "30%",
    width: 158,
    height: 60,
    fontSize: 16,
    fontFamily: "Rubik",
    fontWeight: "bold",
    backgroundColor: "#EE4D47",
  },
  input: {
    padding: 18,
    display: "block",
    marginBottom: "1%",
    width: 400,
    height: 60,
    borderRadius: 3,
    fontSize: 18,
    fontFamily: "Rubik",
    fontWeight: "bold",
  },
};
const DeliveryForm = ({
  addDelivery,
  nextId,
  deliveryInfo,
  updateDelivery,
}) => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  let save = "Save";
  let update = "Update";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (deliveryInfo === "") {
      addDelivery(nextId, date, name, city);
    } else {
      updateDetails();
      updateDelivery(deliveryInfo, deliveryInfo.id);
      
    }
  };

  const updateDetails = () => {
    if (date !== "") {
      deliveryInfo.date = date;
    }
    if (name !== "") {
      deliveryInfo.name = name;
    }
    if (city !== "") {
      deliveryInfo.city = city;
    }
  };

  return (
    <div className="deliveryForm">
      <form style={{ position: "absolute", left: "813px", top: "45px" }}>
        <input
          type="text"
          style={style.input}
          placeholder="01.01.2021"
          defaultValue={deliveryInfo ? deliveryInfo.date : date}
          // value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          style={style.input}
          placeholder="John Doe"
          defaultValue={deliveryInfo ? deliveryInfo.name : name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          style={style.input}
          placeholder="Tel Aviv"
          defaultValue={deliveryInfo ? deliveryInfo.city : city}
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
          {deliveryInfo === "" ? save : update}
        </Button>
      </form>
    </div>
  );
};

export default DeliveryForm;
