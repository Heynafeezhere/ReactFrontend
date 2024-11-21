import React from 'react';  
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Categories from './Components/Categories';
import CategoryProducts from './Components/CategoryProducts';
import ProductDetail from './Components/ProductDetail';
import AllProducts from './Components/AllProducts';
import Checkout from './Components/Checkout';

import Register from './Components/Customer/Register';
import Login from './Components/Customer/Login';
import Dashboard from './Components/Customer/Dashboard';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/product/:product_slug/:id' element={<ProductDetail />} />
        
        <Route path='/categories' element={<Categories />} />
        <Route path='/category/:category_slug/:id' element={<CategoryProducts />} />
        
        <Route path='/checkout' element={<Checkout />} />

        <Route path='/customer/register' element={<Register />} />
        <Route path='/customer/login' element={<Login />} />
        <Route path='/customer/dashboard' element={<Dashboard />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;