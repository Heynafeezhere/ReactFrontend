import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='mt-4'>
        <div className="container">
          {/* Latest Products */}
          <h3 className='mb-4'>Latest Products
            <a href='#' className='float-end btn btn-dark'>View All Products <i className="fa-solid fa-arrow-right"></i></a>
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
            <a href='#' className='float-end btn btn-dark'>View All Categories <i className="fa-solid fa-arrow-right"></i></a>
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
            <a href='#' className='float-end btn btn-dark'>View All Products <i className="fa-solid fa-arrow-right"></i></a>
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
            <a href='#' className='float-end btn btn-dark'>View All Sellers <i className="fa-solid fa-arrow-right"></i></a>
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

          {/* Rating and Reviews */}
          <div id="carouselExampleIndicators" className="carousel slide mt-4 border bg-dark text-white p-5" data-bs-ride="true">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star-half-stroke text-warning'></i>
                    <cite title="Source Title">Customer Name</cite>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star-half-stroke text-warning'></i>
                    <cite title="Source Title">Customer Name</cite>
                  </figcaption>
                </figure>
              </div>
              <div className="carousel-item">
                <figure className="text-center">
                  <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star text-warning'></i>
                    <i className='fa fa-star-half-stroke text-warning'></i>
                    <cite title="Source Title">Customer Name</cite>
                  </figcaption>
                </figure>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* Rating and Reviews ENd*/}

          <Footer />      
        </div>
      </main>
    </>
  );
}

export default App;