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

//vendor panel
import VendorRegister from './Components/Vendor/VendorRegister';
import VendorLogin from './Components/Vendor/VendorLogin';
import VendorDashboard from './Components/Vendor/VendorDashboard';
import VendorProducts from './Components/Vendor/VendorProducts';
import AddProduct from './Components/Vendor/AddProduct';
import VendorOrders from './Components/Vendor/VendorOrders';
import CustomerList from './Components/Vendor/CustomerList';
import Reports from './Components/Vendor/Reports';
import VendorProfile from './Components/Vendor/VendorProfile';
import VendorChangePassword from './Components/Vendor/VendorChangePassword';

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
        
        {/* vendor panel */}
        <Route path='/vendor/dashboard' element={<VendorDashboard />} />
        <Route path='/vendor/register' element={<VendorRegister />} />
        <Route path='/vendor/login' element={<VendorLogin />} />
        <Route path='/vendor/products' element={<VendorProducts />} />
        <Route path='/vendor/add-product' element={<AddProduct />} />
        <Route path='/vendor/orders' element={<VendorOrders />} />
        <Route path='/vendor/customers' element={<CustomerList />} />
        <Route path='/vendor/reports' element={<Reports />} />
        <Route path='/vendor/profile' element={<VendorProfile />} />
        <Route path='/vendor/change-password' element={<VendorChangePassword />} />
        

      </Routes>
      <Footer />
    </>
  );
}

export default App;