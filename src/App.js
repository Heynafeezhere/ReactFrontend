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
import OrderSuccess from './Components/OrderSuccess';
import OrderFailure from './Components/OrderFailure';

//customer panel
import Register from './Components/Customer/Register';
import Login from './Components/Customer/Login';
import Dashboard from './Components/Customer/Dashboard';
import Orders from './Components/Customer/Orders';
import WishList from './Components/Customer/Wishlist';
import Profile from './Components/Customer/Profile';
import ChangePassword from './Components/Customer/ChangePassword';
import AddressList from './Components/Customer/AddressList';
import AddAddress from './Components/Customer/AddAddress';

//seller panel
import SellerRegister from './Components/Seller/SellerRegister';
import SellerLogin from './Components/Seller/SellerLogin';
import SellerDashboard from './Components/Seller/SellerDashboard';
import SellerProducts from './Components/Seller/SellerProducts';
import AddProduct from './Components/Seller/AddProduct';

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
        <Route path='/orders/success' element={<OrderSuccess />} />
        <Route path='/orders/failure' element={<OrderFailure />} />

        {/* customer panel */}
        <Route path='/customer/register' element={<Register />} />
        <Route path='/customer/login' element={<Login />} />
        <Route path='/customer/dashboard' element={<Dashboard />} />
        <Route path='/customer/orders' element={<Orders />} />
        <Route path='/customer/wishlist' element={<WishList />} />
        <Route path='/customer/profile' element={<Profile />} />
        <Route path='/customer/change-password' element={<ChangePassword />} />
        <Route path='/customer/addresses' element={<AddressList />} />
        <Route path='/customer/add-address' element={<AddAddress />} />
        
        {/* seller panel */}
        <Route path='/seller/dashboard' element={<SellerDashboard />} />
        <Route path='/seller/register' element={<SellerRegister />} />
        <Route path='/seller/login' element={<SellerLogin />} />
        <Route path='/seller/products' element={<SellerProducts />} />
        <Route path='/seller/add-product' element={<AddProduct />} />
        

      </Routes>
      <Footer />
    </>
  );
}

export default App;