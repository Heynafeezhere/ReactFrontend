import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Checkout() {
    return (
        <section className="container mt-4">
            <h3>Shopping Cart(4)</h3>
            <div className="row mt-3">
                <div className="col-md-8 col-12">
                    <div className="table responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <Link to="/product/T-shirt/1"><img src={logo} className="img-thumbnail me-2" width={80} alt="..." /></Link>
                                        <p><Link to="/product/T-shirt/1">DNMX T-shirt</Link></p>
                                    </td>
                                    <td>Rs.500</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <Link to="/product/T-shirt/1"><img src={logo} className="img-thumbnail me-2" width={80} alt="..." /></Link>
                                        <p><Link to="/product/T-shirt/1">DNMX Shirt</Link></p>
                                    </td>
                                    <td>Rs.780</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <Link to="/product/T-shirt/1"><img src={logo} className="img-thumbnail me-2" width={80} alt="..." /></Link>
                                        <p><Link to="/product/T-shirt/1">DNMX Pant</Link></p>
                                    </td>
                                    <td>Rs.1079</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Total</th>
                                    <th>Rs. 2359</th>
                                </tr>
                                <tr >
                                    <td colSpan='3' align='right'>
                                        <Link to='/categories'className='btn btn-success'><i class="fa-solid fa-cart-shopping" /> Continue Shopping </Link>
                                        <Link className='btn btn-primary ms-1'><i class="fa-solid fa-credit-card" /> Proceed to Buy </Link>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout;