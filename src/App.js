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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/category/:category_slug/:id' element={<CategoryProducts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;