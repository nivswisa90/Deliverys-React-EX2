import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import DeliveriesList from "./Components/DeliveriesList";
import Layout from './Components/Layout';
import Delivery from './Components/Delivery';
import SaveDeliveryForm from './Components/SaveDeliveryForm'
import Truck from './Components/Truck';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    {/* <Delivery/> */}
    <Layout />
    {/* <DeliveriesList/> */}
    {/* <SaveDeliveryForm/> */}
    {/* <Truck/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
