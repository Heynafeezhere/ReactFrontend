import { Link } from 'react-router-dom';
function OrderFailure() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-8 offset-2 mb-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <i className="fa fa-times-circle text-danger fa-3x"/>
                            <h4 className='mt-3'>OOPS! Something went wrong</h4>
                            <p>Sorry for the inconvenience. Please try again Later or contact the support.</p>
                            <Link to="/" className='btn btn-primary'> <i class="fa-solid fa-cart-shopping" /> Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderFailure;