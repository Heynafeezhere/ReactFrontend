import { Link } from 'react-router-dom';

import logo from '../logo.svg';
function SingleProduct(props) {
    return (
        <div className="col-12 col-md-3 mb-4">
            <div className="card">
                <Link to={`/product/${props.product.id}`}>
                    <img src={logo} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <Link to={`/product/${props.product.id}`}>
                        <h4 className="card-title">{props.product.name}</h4>
                    </Link>
                    <h5 className="card-title text-muted">Price(₹) : <span className='text-muted'>{props.product.price}</span></h5>
                    {/* <h5 className="card-title text-muted">Item-Id : <span className='text-muted'>{props.product.id}</span></h5> */}
                </div>
                <div className='card-footer'>
                    <button title='Add to cart' className='btn btn-primary btn-block'>
                        <i className="fa-solid fa-cart-plus"></i></button>
                    <button title='Add to Wishlist' className='btn btn-danger btn-block ms-2'>
                        <i className="fa fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;