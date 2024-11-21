import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import SingleProduct from "./SingleProduct";

function ProductDetail() {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <div id="productThumbnailSlider" className="carousel carousel-dark slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={logo} className="img-thumbnail mb-5" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="img-thumbnail mb-5" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="img-thumbnail mb-5" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-8">
                    <h3>Product Title</h3>
                    <p>
                        Tune in to the Make it Big Podcast — our thought
                        leadership audio series for retailers,
                        entrepreneurs and ecommerce professionals. You'll get expert insights, strategies
                        and tactics to help grow your business.
                    </p>
                    <h5 className="card-title">Price: Rs. 500</h5>
                    <p className='mt-3'>
                        <button title='Demo' className='btn btn-dark btn-block'>
                            <i className="fa fa-video"></i> Demo</button>
                        <button title='Add to cart' className='btn btn-primary btn-block ms-2'>
                            <i className="fa-solid fa-cart-plus"></i> Add to Cart</button>
                        <button title='Buy Now' className='btn btn-success btn-block ms-2'>
                            <i className="fa fa-bag-shopping"></i> Buy Now</button>
                        <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                            <i className="fa fa-heart"></i> Add to Wishlist</button>
                    </p>
                    <div className='product-tags mt-4'>
                        <p>
                            <h5>Tags</h5>
                            <Link to='#' className='badge bg-secondary text-white me-1'>T-shirt</Link>
                            <Link to='#' className='badge bg-secondary text-white me-1'>Shirt</Link>
                            <Link to='#' className='badge bg-secondary text-white me-1'>Trousers</Link>
                            <Link to='#' className='badge bg-secondary text-white me-1'>Pants</Link>
                            <Link to='#' className='badge bg-secondary text-white me-1'>T-shirt</Link>
                            <Link to='#' className='badge bg-secondary text-white me-1'>Shirt</Link>
                            <Link to='#' className='badge bg-secondary text-white me-1'>Trousers</Link>
                            <Link to='#' className='badge bg-secondary text-white me-1'>Pants</Link>
                            <Link to='#' className='badge bg-secondary text-white me-1'>T-shirt</Link>
                            <Link to='#' className='badge bg-secondary text-white me-1'>Shirt</Link>
                            <Link to='#' className='badge bg-secondary text-white me-1'>Trousers</Link>
                            <Link to='#' className='badge bg-secondary text-white me-1'>Pants</Link>
                        </p>
                    </div>
                </div>
            </div>
            {/* Related products */}
            <h3 className='mt-5'>Related Products</h3>
            <div id="relatedProductsSlider" className="carousel carousel-dark slide mt-4" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active mb-5">
                        <div className='row'>
                            <SingleProduct title='Product title - 1' price='Rs. 500' />
                            <SingleProduct title='Product title - 1' price='Rs. 500' />
                            <SingleProduct title='Product title - 1' price='Rs. 500' />
                            <SingleProduct title='Product title - 1' price='Rs. 500' />
                        </div>
                    </div>
                    <div className="carousel-item mb-5">
                        <div className='row'>
                            <SingleProduct title='Product title - 1' price='Rs. 500' />
                            <SingleProduct title='Product title - 1' price='Rs. 500' />
                            <SingleProduct title='Product title - 1' price='Rs. 500' />
                            <SingleProduct title='Product title - 1' price='Rs. 500' />
                        </div>
                    </div>
                    <div className="carousel-item mb-5">
                        <div className='row'>
                            <SingleProduct title='Product title - 1' price='Rs. 500' />
                            <SingleProduct title='Product title - 1' price='Rs. 500' />
                            <SingleProduct title='Product title - 1' price='Rs. 500' />
                            <SingleProduct title='Product title - 1' price='Rs. 500' />
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev-sm mt-3 me-2" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next-mt-3" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
            {/* Related products End */}
        </section>
    )
}

export default ProductDetail;