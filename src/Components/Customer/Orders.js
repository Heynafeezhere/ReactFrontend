import Sidebar from './Sidebar';

import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
function Orders() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className="table responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
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
                                        <td><span className='text-success'><i className="fa fa-check-circle"></i> Completed</span></td>
                                        <td><button className='btn btn-primary'>Download</button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <Link to="/product/T-shirt/1"><img src={logo} className="img-thumbnail me-2" width={80} alt="..." /></Link>
                                            <p><Link to="/product/T-shirt/1">DNMX Shirt</Link></p>
                                        </td>
                                        <td>Rs.780</td>
                                        <td><span className='text-secondary'><i className="fa fa-spin fa-spinner"></i> Proccessing</span></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <Link to="/product/T-shirt/1"><img src={logo} className="img-thumbnail me-2" width={80} alt="..." /></Link>
                                            <p><Link to="/product/T-shirt/1">DNMX Pant</Link></p>
                                        </td>
                                        <td>Rs.1079</td>
                                        <td><span className='text-danger'><i className="fa fa-times-circle"></i> Cancelled</span></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Orders;