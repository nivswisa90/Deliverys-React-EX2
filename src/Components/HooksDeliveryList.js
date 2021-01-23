import React, {useState} from 'react';

const DeliveryListnew = () => {
    const [deliveries, setDelivery] = useState([
        {id:1 , date:"05.01.2021",name:"Jhon due",city:"Tel Aviv" },
        {id:2 , date:"07.01.2021",name:"Niv",city:"Haifa" },
        {id:3 , date:"15.01.2021",name:"Eira",city:"Jerusalem" }
    ]);
    
    const addDelivery = () => {
        setDelivery([...deliveries, {id:4,date:"20.01.2021",name:"Ezra",city:"Petah Tikwa"}])
    };

    
    return (
        <div className="delivery-list">
            <ul>
                {deliveries.map(delivery => {
                    return (<p key={delivery.id}>{delivery.date} {delivery.name}
                    {delivery.city}</p>)
                })}
            </ul>
            <button onClick={addDelivery}>Add Delivery</button>
        </div>
    );
}

export default DeliveryListnew;