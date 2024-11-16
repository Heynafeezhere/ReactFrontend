import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <main className='mt-4'>
        <div className="container">
          {/* Latest Products */}
          <h3 className='mb-4'>Latest Products
            <a href='#' className='float-end btn btn-dark'>View All Products <i class="fa-solid fa-arrow-right"></i></a>
          </h3>
          <div className="row mb-4">
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: <span className='text-muted'>Rs. 500</span></h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-primary btn-block'>
                    <i className="fa-solid fa-cart-plus"></i></button>
                  <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                    <i className="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Box End*/}
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: <span className='text-muted'>Rs. 500</span></h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-primary btn-block'>
                    <i className="fa-solid fa-cart-plus"></i></button>
                  <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                    <i className="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Box End*/}
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: <span className='text-muted'>Rs. 500</span></h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-primary btn-block'>
                    <i className="fa-solid fa-cart-plus"></i></button>
                  <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                    <i className="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Box End*/}
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: <span className='text-muted'>Rs. 500</span></h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-primary btn-block'>
                    <i className="fa-solid fa-cart-plus"></i></button>
                  <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                    <i className="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Box End*/}
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: <span className='text-muted'>Rs. 500</span></h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-primary btn-block'>
                    <i className="fa-solid fa-cart-plus"></i></button>
                  <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                    <i className="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Box End*/}
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: <span className='text-muted'>Rs. 500</span></h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-primary btn-block'>
                    <i className="fa-solid fa-cart-plus"></i></button>
                  <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                    <i className="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Box End*/}
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: <span className='text-muted'>Rs. 500</span></h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-primary btn-block'>
                    <i className="fa-solid fa-cart-plus"></i></button>
                  <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                    <i className="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Box End*/}
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: <span className='text-muted'>Rs. 500</span></h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-primary btn-block'>
                    <i className="fa-solid fa-cart-plus"></i></button>
                  <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                    <i className="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Box End*/}
          </div>
          {/* Latest Products End*/}

          {/* Popular Categories */}
          <h3 className='mb-4'>Popular Categories
            <a href='#' className='float-end btn btn-dark'>View All Categories <i class="fa-solid fa-arrow-right"></i></a>
          </h3>
          <div className="row mb-4">
            {/* Categories Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
                <div className='card-footer'>
                  Product Downloads : 2546
                </div>
              </div>
            </div>
            {/* Categories Box End*/}
            {/* Categories Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
                <div className='card-footer'>
                  Product Downloads : 2546
                </div>
              </div>
            </div>
            {/* Categories Box End*/}
            {/* Categories Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
                <div className='card-footer'>
                  Product Downloads : 2546
                </div>
              </div>
            </div>
            {/* Categories Box End*/}
            {/* Categories Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Category title</h4>
                </div>
                <div className='card-footer'>
                  Product Downloads : 2546
                </div>
              </div>
            </div>
            {/* Categories Box End*/}
          </div>
          {/* Popular Categories End*/}

          {/* Popular Products */}
          <h3 className='mb-4'>Popular Products
            <a href='#' className='float-end btn btn-dark'>View All Products <i class="fa-solid fa-arrow-right"></i></a>
          </h3>
          <div className="row mb-4">
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: <span className='text-muted'>Rs. 500</span></h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-primary btn-block'>
                    <i className="fa-solid fa-cart-plus"></i></button>
                  <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                    <i className="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Box End*/}
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: <span className='text-muted'>Rs. 500</span></h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-primary btn-block'>
                    <i className="fa-solid fa-cart-plus"></i></button>
                  <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                    <i className="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Box End*/}
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: <span className='text-muted'>Rs. 500</span></h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-primary btn-block'>
                    <i className="fa-solid fa-cart-plus"></i></button>
                  <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                    <i className="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Box End*/}
            {/* Product Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: <span className='text-muted'>Rs. 500</span></h5>
                </div>
                <div className='card-footer'>
                  <button title='Add to cart' className='btn btn-primary btn-block'>
                    <i className="fa-solid fa-cart-plus"></i></button>
                  <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                    <i className="fa fa-heart"></i></button>
                </div>
              </div>
            </div>
            {/* Product Box End*/}
          </div>
          {/* Popular Products End*/}

          {/* Popular Sellers */}
          <h3 className='mb-4'>Popular Sellers
            <a href='#' className='float-end btn btn-dark'>View All Sellers <i class="fa-solid fa-arrow-right"></i></a>
          </h3>
          <div className="row mb-4">
            {/* Seller Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Seller title</h4>
                </div>
                <div className='card-footer'>
                  Categories : <a href='#'>React</a>, <a href='#'>Django</a>
                </div>
              </div>
            </div>
            {/* Seller Box End*/}
            {/* Seller Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Seller title</h4>
                </div>
                <div className='card-footer'>
                  Categories : <a href='#'>React</a>, <a href='#'>Django</a>
                </div>
              </div>
            </div>
            {/* Seller Box End*/}
            {/* Seller Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Seller title</h4>
                </div>
                <div className='card-footer'>
                  Categories : <a href='#'>React</a>, <a href='#'>Django</a>
                </div>
              </div>
            </div>
            {/* Seller Box End*/}
            {/* Seller Box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">Seller title</h4>
                </div>
                <div className='card-footer'>
                  Categories : <a href='#'>React</a>, <a href='#'>Django</a>
                </div>
              </div>
            </div>
            {/* Seller Box End*/}
          </div>
          {/* Popular Sellers End*/}
        </div>
      </main>
    </>
  );
}

export default App;