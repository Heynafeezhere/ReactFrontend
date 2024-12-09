import Sidebar from './Sidebar';
import UserContext from '../../Context';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';

function Orders() {
    const userContext = useContext(UserContext);
    const [orderItems, setOrderItems] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(5); // Default page size
    const baseUrl = 'http://127.0.0.1:8000/api/';

    const location = useLocation();

    // Extract page number from query string
    const query = new URLSearchParams(location.search);
    const currentPage = parseInt(query.get("page")) || 1; // Default to page 1 if not present

    // Ensure currentPage doesn't exceed total pages
    const totalPages = Math.ceil(totalCount / pageSize);
    const adjustedPage = Math.min(currentPage, totalPages) || 1;

    useEffect(() => {
        fetchData(`${baseUrl}customer/${userContext.customerId}/orders/?page=${adjustedPage}`);
    }, [userContext, adjustedPage]);

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setOrderItems(data.results);
                setTotalCount(data.count);
                if (data.page_size) setPageSize(data.page_size); // Optional if the API provides `page_size`
            });
    }

    // Generate pagination links
    const links = [];
    for (let i = 1; i <= totalPages; i++) {
        links.push(
            <li
                key={i}
                className={`page-item ${adjustedPage === i ? "active" : ""}`}
            >
                <Link
                    className="page-link"
                    to={`/customer/orders/?page=${i}`}
                >
                    {i}
                </Link>
            </li>
        );
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderItems.map((item) => {
                                            return (
                                                <tr className='align-middle' key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>
                                                        <Link to={`/product/${item.product.slug}/${item.product.id}`}>
                                                            <img src={item.product.image} className="img-thumbnail me-2" width={80} alt="..." />
                                                        </Link>
                                                        <p><Link to={`/product/${item.product.slug}/${item.product.id}`} className='text-dark'>{item.product.name}</Link></p>
                                                    </td>
                                                    <td>Rs.{(item.product.price * item.quantity).toFixed(2)}</td>
                                                    <td>{(item.quantity)}</td>
                                                    <td>
                                                        {
                                                            item.order.status === 'processed' &&
                                                            <span className='text-success'><i className="fa fa-check-circle"></i> {item.order.status}</span>
                                                        }
                                                        {
                                                            item.order.status === 'pending' &&
                                                            <span className='text-dark'><i className="fa fa-spinner fa-spin"></i> {item.order.status}</span>
                                                        }
                                                        {
                                                            item.order.status === 'canceled' &&
                                                            <span className='text-danger'><i className="fa fa-times-circle"></i> {item.order.status}</span>
                                                        }
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pagination */}
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {links}
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Orders;
