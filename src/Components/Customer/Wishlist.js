import Sidebar from './Sidebar';
import UserContext from '../../Context';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import logo from '../../logo.svg';
import axios from 'axios';
function Wishlist() {
    const userContext = useContext(UserContext);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [wishlistItemRemoved, setWishlistItemRemoved] = useState(false);
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
        fetchData(`${baseUrl}customer/${userContext.customerId}/wishlist/?page=${adjustedPage}`);
    }, [userContext, adjustedPage, wishlistItemRemoved]);

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setWishlistItems(data.results);
                setTotalCount(data.count);
                if (data.page_size) setPageSize(data.page_size); // Optional if the API provides `page_size`
            });
    }

    function removeWishlistHandler(wishlistId){
        axios.delete(`${baseUrl}customer/remove-wishlist/${wishlistId}`)
        .then(function (response){
            if (response.data.bool) setWishlistItemRemoved(true)
        })
        .catch(function(error){
            console.log(error);
        })
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
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                    wishlistItems.map((item,index) => {
                                        return(
                                            <tr className='align-middle' key={item.id} id={`row-${item.id}`} >
                                                <td>{index+1}</td>
                                                <td>
                                                        <Link to={`/product/${item.product.slug}/${item.product.id}`}>
                                                            <img src={item.product.image} className="img-thumbnail me-2" width={80} alt="..." />
                                                        </Link>
                                                        <p><Link to={`/product/${item.product.slug}/${item.product.id}`} className='text-dark'>{item.product.name}</Link></p>
                                                    </td>
                                                <td>&#8377; {item.product.price}</td>
                                                <td>
                                                <button
                                                    name="remove-wishlist"
                                                    title='Remove from wishlist'
                                                    className="btn btn-danger btn-block ms-2"
                                                    onClick={()=>{removeWishlistHandler(item.id)}}
                                                >
                                                    <i className="fa-solid fa-trash-can"></i> Remove
                                                </button>
                                            </td>
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

export default Wishlist;