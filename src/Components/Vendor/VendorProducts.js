import VendorSidebar from './VendorSidebar';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import { VendorContext } from '../../Context';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';

function VendorProducts() {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const vendorContext = useContext(VendorContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData()
    }, [vendorContext.products]);

    function fetchData() {
        fetch(`${baseUrl}vendor/${vendorContext.vendorId}/products/`)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.results);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }

    function deleteProductHandler(id) {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (confirmDelete) {
            axios.delete(`${baseUrl}product/${id}/`)
                .then((response) => {
                    // On successful deletion, filter out the deleted product from the list
                    setProducts(products.filter(product => product.id !== id));
                    alert('Product deleted successfully!');
                })
                .catch((error) => {
                    console.error(error);
                    alert('Failed to delete the product. Please try again.');
                });
        }
    }

    console.log(products);
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link className='btn btn-outline-success float-end mb-2' to='/vendor/add-product'>
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
                                    {
                                        products.map((product, index) => {
                                            return (
                                                <tr key={product.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{product.name}</td>
                                                    <td>&#8377;{product.price}</td>
                                                    <td>{product.stock_quantity}</td>
                                                    <td>{product.status}</td>
                                                    <td>
                                                        <Link to={`/product/${product.slug}/${product.id}`} className='btn btn-success me-2'>View</Link>
                                                        <Link to={`/vendor/edit-product/${product.id}`} className='btn btn-info me-2'>Edit</Link>
                                                        <button onClick={() => deleteProductHandler(product.id)} className='btn btn-danger'>Delete</button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VendorProducts;
