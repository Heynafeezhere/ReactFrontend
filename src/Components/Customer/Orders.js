import Sidebar from './Sidebar';
import UserContext from '../../Context';

import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import { useEffect, useContext, useState } from 'react';
function Orders() {
    const userContext = useContext(UserContext)
    const [orderItems, setOrderItems] = useState([])
    const baseUrl = 'http://127.0.0.1:8000/api/';

    useEffect(() => {
        fetchData(`${baseUrl}customer/${userContext.customerId}/orders/`)
    }, [userContext])

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setOrderItems(data.results))
    }


    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className="table responsive">
                            <table className="table table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th>Order Number</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderItems.map((item) => {
                                            return (
                                                <tr className='align-middle'>
                                                    <td>{item.id}</td>
                                                    <td>
                                                        <Link to={`/product/${item.product.slug}/${item.product.id}`}><img src={item.product.image} className="img-thumbnail me-2" width={80} alt="..." /></Link>
                                                        <p><Link to={`/product/${item.product.slug}/${item.product.id}`} className='text-dark'>{item.product.name}</Link></p>
                                                    </td>
                                                    <td>Rs.{(item.product.price * item.quantity).toFixed(2)}</td>
                                                    <td>{(item.quantity)}</td>
                                                    <td>
                                                        {
                                                            item.order.status == 'processed' &&
                                                            <span className='text-success'><i className="fa fa-check-circle"></i> {item.order.status}</span>
                                                        }
                                                        {
                                                            item.order.status == 'pending' &&
                                                            <span className='text-dark'><i className="fa fa-spinner fa-spin"></i> {item.order.status}</span>
                                                        }
                                                        {
                                                            item.order.status == 'canceled' &&
                                                            <span className='text-danger'><i className="fa fa-times-circle"></i> {item.order.status}</span>
                                                        }
                                                    </td>
                                                    <td><Link to='/' className='btn btn-primary'>Download</Link></td>
                                                </tr>
                                            )
                                        })
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

export default Orders;