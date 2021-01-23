import React ,{ useState} from 'react';
import backgroundImage from "../images/Scene.png";
import deliveriesData from "../Data/deliveriesInfo.json";
import DeliveriesList from './DeliveriesList';
import DeliveryForm from './DeliveryForm';


const LayoutImage = () => {
    const [delivery, setDelivery] = useState(deliveriesData);

    const deleteDelivery = (id) => {
      setDelivery(delivery.filter((delivery) => delivery.id !== id));
    }

    const addDelivery = (date,name,city) => {
      setDelivery([...delivery, {id:9,date:date,name:name,city:city}]);
    }

    return (
        <div id="backgroundimage">
          <img
            src={backgroundImage}
            alt="backgroundImage"
            style={{ width: 1285, height: 800 }}
          />
          <DeliveriesList deliveryInfo={delivery} deleteDelivery={deleteDelivery}  />
          <DeliveryForm addDelivery={addDelivery}/>
          {/* <div>{this.props.children}</div> */}
        </div>
    )
}

export default LayoutImage;


