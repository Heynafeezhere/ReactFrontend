import VendorSidebar from './VendorSidebar';

import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import { useState, useEffect, useContext } from 'react';
import { VendorContext } from '../../Context';
function VendorOrders() {
    const [orderItems, setOrderItems] = useState([]);
    const baseUrl = "http://127.0.0.1:8000/api/";
    const vendorContext = useContext(VendorContext);

    useEffect(() => {
        fetchData(`${baseUrl}vendor/${vendorContext.vendorId}/order-items/`)
    }, [vendorContext]);

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setOrderItems(data.results);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }

    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className="table responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>OrderId</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderItems.map((orderItem) => (
                                            <tr key={orderItem.id}>
                                                <td>{orderItem.id}</td>
                                                <td>
                                                    <Link to={`/product/${orderItem.product.slug}`}>
                                                        <img src={orderItem.product.image} className="img-thumbnail me-2" width={80} alt="..." />
                                                    </Link>
                                                    <p><Link to={`/product/${orderItem.product.slug}`}>{orderItem.product.name}</Link></p>
                                                </td>
                                                <td>&#8377;{orderItem.product.price}</td>
                                                <td><span className='text-dark fw-bold'> {orderItem.order.status}</span></td>
                                                <td>
                                                    <div className="btn-group" role="group">
                                                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Change Status
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" href="#">pending</a></li>
                                                            <li><a className="dropdown-item" href="#">processed</a></li>
                                                            <li><a className="dropdown-item" href="#">shipped</a></li>
                                                            <li><a className="dropdown-item" href="#">delivered</a></li>
                                                            <li><a className="dropdown-item" href="#">canceled</a></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VendorOrders;