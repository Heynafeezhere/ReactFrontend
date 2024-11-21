import { Link } from 'react-router-dom';
function OrderSuccess() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-8 offset-2 mb-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <i className="fa fa-check-circle text-success fa-3x"/>
                            <h4 className='mt-3'>Order Placed Successfully</h4>
                            <p>Thanks for shopping with us. Your order will be delivered to you soon.</p>
                            <Link to="/" className='btn btn-primary'> <i class="fa-solid fa-cart-shopping" /> Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderSuccess;