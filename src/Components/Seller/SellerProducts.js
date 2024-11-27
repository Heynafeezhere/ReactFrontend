import SellerSidebar from './SellerSidebar';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
function SellerProducts() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link className='btn btn-outline-success float-end mb-2' to='/seller/add-product'>
                                <i className='fa fa-plus' />
                                Add Product
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <Link to="/product/T-shirt/1">
                                                <img src={logo} className="img-thumbnail me-2" width={80} alt="..." />
                                            </Link>
                                            <p><Link to="/product/T-shirt/1">DNMX T-shirt</Link></p>
                                        </td>
                                        <td>Rs.500</td>
                                        <td>2</td>
                                        <td><span className='text-success'><i className="fa fa-check-circle"></i> Published</span></td>
                                        <td>
                                            <button className='btn btn-success me-2'>View</button>
                                            <button className='btn btn-info me-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
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

export default SellerProducts;