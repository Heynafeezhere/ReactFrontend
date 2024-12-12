import Sidebar from './Sidebar';
import UserContext from '../../Context';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import axios from 'axios';

function AddressList() {
    const userContext = useContext(UserContext);
    const [addressList, setAddressList] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(6); // Default page size
    const baseUrl = 'http://127.0.0.1:8000/api/';

    const location = useLocation();
    const navigate = useNavigate();

    // Extract page number from query string
    const query = new URLSearchParams(location.search);
    const currentPage = parseInt(query.get("page")) || 1; // Default to page 1 if not present

    // Ensure currentPage doesn't exceed total pages
    const totalPages = Math.ceil(totalCount / pageSize);
    const adjustedPage = Math.min(currentPage, totalPages) || 1;

    useEffect(() => {
        fetchData(`${baseUrl}customer/address-list/${userContext.customerId}/?page=${adjustedPage}`);
    }, [userContext, adjustedPage]);

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setAddressList(data.results);
                setTotalCount(data.count);
                if (data.page_size) setPageSize(data.page_size); // Optional if the API provides `page_size`
            });
    }

    // Sort addresses to ensure primary address is at the top
    const sortedAddressList = [...addressList].sort((a, b) => {
        if (a.primaryAddress && !b.primaryAddress) return -1; // Primary address comes first
        if (!a.primaryAddress && b.primaryAddress) return 1;  // Non-primary address comes last
        return 0; // If both are primary or both non-primary, maintain original order
    });

    // Handle address deletion
    const deleteAddress = (addressId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this address?");
        if (confirmDelete) {
            axios.delete(`${baseUrl}addresses/${addressId}/`)
                .then((response) => {
                    // On successful deletion, filter out the deleted address from the list
                    setAddressList(addressList.filter(address => address.id !== addressId));
                    alert('Address deleted successfully!');
                    window.location.href = '/customer/addresses';
                })
                .catch((error) => {
                    console.error(error);
                    alert('Failed to delete the address. Please try again.');
                });
        }
    };

    // Handle page change
    const handlePageChange = (newPage) => {
        navigate(`/customer/addresses?page=${newPage}`);
    };

    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link className='btn btn-outline-success float-end mb-2' to='/customer/add-address'>
                                <i className='fa fa-plus' />
                                Add address
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            sortedAddressList.map((address) => {
                                return (
                                    <div className='col-md-4 col-12 mb-4' key={address.id}>
                                        <div className='card shadow' style={{ height: '100%' }}>
                                            <div className='card-body d-flex flex-column'>
                                                {address.primaryAddress ? <h6> <i className='fa fa-check-circle text-success'></i> Primary<hr /></h6> : <h6 />}
                                                <h6>{address.address_line1}</h6>
                                                <h6>{address.address_line2}</h6>
                                                <h6>{address.city}</h6>
                                                <h6>{address.state}</h6>
                                                <h6>{address.zip_code}</h6>
                                                <h6>{address.country}</h6>
                                                <div className="d-flex justify-content-between mt-auto">
                                                    <Link to={`/customer/update-address/${address.id}`} className="btn btn-warning btn-sm">
                                                        Edit
                                                    </Link>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => deleteAddress(address.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

                    {/* Pagination Controls */}
                    <div className="d-flex justify-content-center mt-4">
                        <nav aria-label="Page navigation">
                            <ul className="pagination">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                                </li>

                                {/* Individual page numbers */}
                                {[...Array(totalPages)].map((_, index) => {
                                    const pageNumber = index + 1;
                                    return (
                                        <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
                                            <button className="page-link" onClick={() => handlePageChange(pageNumber)}>
                                                {pageNumber}
                                            </button>
                                        </li>
                                    );
                                })}

                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddressList;
