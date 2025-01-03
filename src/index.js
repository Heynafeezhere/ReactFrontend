import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContext, { VendorContext } from './Context'

const customerLogin = localStorage.getItem('customer_login');
const customerName = localStorage.getItem('customer_username');
const customerId = localStorage.getItem('customer_id');
const vendorId = localStorage.getItem('vendor_id');
const vendorLogin = localStorage.getItem('vendor_login');
const vendorName = localStorage.getItem('vendor_username');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <UserContext.Provider value={{
      'customerLogin': customerLogin,
      'customerName': customerName,
      'customerId': customerId
    }}>
      <VendorContext.Provider value={{
        'vendorLogin': vendorLogin,
        'vendorName': vendorName,
        'vendorId': vendorId
      }}>
        <App />
      </VendorContext.Provider>
    </UserContext.Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
