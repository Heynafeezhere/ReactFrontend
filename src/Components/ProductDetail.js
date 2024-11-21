import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function ProductDetail() {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <img src={logo} className="card-img-top" alt="..." />
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
        </section>
    )
}

export default ProductDetail;