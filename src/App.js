import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">ThinkUni</a>
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categories</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className='mt-4'>
        <div className="container">
          <h3 className='mb-4'>Latest Products
            <a href='#' className='float-end btn btn-dark'>View All Products <i class="fa-solid fa-arrow-right"></i></a>
          </h3>
          <div className="row">
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
        </div>
      </main>
    </>
  );
}

export default App;
