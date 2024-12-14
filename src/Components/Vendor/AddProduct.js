import VendorSidebar from './VendorSidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { VendorContext } from '../../Context';
import { useContext } from 'react';

function AddProduct() {
    const vendorContext = useContext(VendorContext);
    const [categories, setCategories] = useState([]);
    const [prdouctData, setProductData] = useState({
        vendor: vendorContext.vendorId,
        category: '',
        product_name: '',
        product_id: '',
        description: '',
        price: '',
        stock_quantity: '',
        tags: '',
        image: '',
        slug: ''
    });
    const [message, setMessage] = useState({ text: '', type: '' }); // State to hold success or error messages

    const baseUrl = 'http://127.0.0.1:8000/api/';

    useEffect(() => {
        if (!vendorContext.vendorLogin) {
            window.location.href = '/vendor/login';
        }
        fetchData();
    }, [vendorContext]);

    function fetchData() {
        fetch(baseUrl + 'categories/')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data.results);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }

    function inputHandler(event) {
        const { name, value } = event.target;

        // If the product name changes, generate the slug
        if (name === 'product_name') {
            const slug = value.trim().replace(/\s+/g, '-').toLowerCase();
            setProductData({
                ...prdouctData,
                [name]: value,
                slug: slug  // Update the slug
            });
        } else {
            setProductData({
                ...prdouctData,
                [name]: value
            });
        }
    }

    function fileHandler(event) {
        setProductData({
            ...prdouctData,
            [event.target.name]: event.target.files[0]
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('vendor', vendorContext.vendorId);
        formData.append('category', prdouctData.category);
        formData.append('name', prdouctData.product_name);
        formData.append('item_id', prdouctData.product_id);
        formData.append('slug', prdouctData.slug);  // Append slug
        formData.append('description', prdouctData.description);
        formData.append('price', prdouctData.price);
        formData.append('stock_quantity', prdouctData.stock_quantity);
        formData.append('tags', prdouctData.tags);
        formData.append('image', prdouctData.image);

        axios.post(`${baseUrl}products/add-product/`, formData)
            .then((response) => {
                console.log(response);
                // Set success message
                setMessage({
                    text: 'Product added successfully!',
                    type: 'success'
                });
                // Optionally reset the form here after success
                setProductData({
                    vendor: vendorContext.vendorId,
                    category: '',
                    product_name: '',
                    product_id: '',
                    description: '',
                    price: '',
                    stock_quantity: '',
                    tags: '',
                    image: '',
                    slug: ''
                });
            })
            .catch((error) => {
                console.error(error);
                // Set error message
                setMessage({
                    text: 'Failed to add product. Please try again.',
                    type: 'error'
                });
            });
    }

    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar />
                </div>
                <div className='col-md-9 col-12 mb-1'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Add Product</h4>
                        </div>
                        <div className="card-body mt-1">
                            {message.text && (
                                <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                                    {message.text}
                                </div>
                            )}
                            <form>
                                {/* Category */}
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label fw-bold">Category</label>
                                    <select className="form-select" onChange={inputHandler} value={prdouctData.category} id="category" name="category" required>
                                        <option className='text-muted' value="0">Select Category</option>
                                        {categories.map((category) => {
                                            return (
                                                <option key={category.id} value={category.id}>{category.title}</option>
                                            );
                                        })}
                                    </select>
                                </div>

                                {/* Product Name */}
                                <div className="mb-3">
                                    <label htmlFor="product_name" className="form-label fw-bold">Product Name</label>
                                    <input type="text" className="form-control" onChange={inputHandler} value={prdouctData.product_name} id="product_name" name="product_name" maxLength="255" required />
                                </div>

                                {/* Product ID */}
                                <div className="mb-3">
                                    <label htmlFor="product_id" className="form-label fw-bold">Product Id</label>
                                    <input type="text" className="form-control" onChange={inputHandler} value={prdouctData.product_id} id="product_id" name="product_id" maxLength="255" required />
                                </div>

                                {/* Tags */}
                                <div className="mb-3">
                                    <label htmlFor="tags" className="form-label fw-bold">Product Tags</label>
                                    <textarea type="text" className="form-control" onChange={inputHandler} value={prdouctData.tags} id="tags" name="tags" required />
                                </div>

                                {/* Description */}
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label fw-bold">Description</label>
                                    <textarea className="form-control" onChange={inputHandler} value={prdouctData.description} id="description" name="description" rows="4"></textarea>
                                </div>

                                {/* Price */}
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label fw-bold">Price (₹)</label>
                                    <input type="number" className="form-control" onChange={inputHandler} value={prdouctData.price} id="price" name="price" step="0.01" max="99999999.99" required />
                                </div>

                                {/* Stock Quantity */}
                                <div className="mb-3">
                                    <label htmlFor="stock_quantity" className="form-label fw-bold">Stock Quantity</label>
                                    <input type="number" className="form-control" onChange={inputHandler} value={prdouctData.stock_quantity} id="stock_quantity" name="stock_quantity" min="0" required />
                                </div>

                                {/* Image */}
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label fw-bold">Featured Image</label>
                                    <input type="file" className="form-control" onChange={fileHandler} id="image" name="image" accept="image/*" required />
                                </div>

                                <button type="button" className="btn btn-primary" onClick={submitHandler}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddProduct;
