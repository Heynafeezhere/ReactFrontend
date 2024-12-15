import VendorSidebar from './VendorSidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { VendorContext } from '../../Context';
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

function UpdateProduct() {
    const vendorContext = useContext(VendorContext);
    const [categories, setCategories] = useState([]);
    const [productData, setProductData] = useState({
        vendor: vendorContext.vendorId,
        category: '',  // category will store only the category.id
        name: '',
        product_id: '',
        description: '',
        item_id: '',
        price: '',
        status: '',
        stock_quantity: '',
        tags: '',
        image: '',  // Image URL or file will be stored here
        slug: ''
    });
    const [message, setMessage] = useState({ text: '', type: '' });
    const [loading, setLoading] = useState(true);
    const [imagePreview, setImagePreview] = useState('');
    const { product_id } = useParams();
    const baseUrl = 'http://127.0.0.1:8000/api/';

    useEffect(() => {
        if (!vendorContext.vendorLogin) {
            window.location.href = '/vendor/login';
        }
        fetchCategories();
        fetchProductData();
    }, [vendorContext, product_id]);

    const fetchProductData = () => {
        axios.get(`${baseUrl}product/${product_id}/`)
            .then((response) => {
                const data = response.data;
                setProductData((prevData) => ({
                    ...prevData,
                    category: data.category.id,
                    name: data.name,
                    product_id: data.item_id,
                    description: data.description,
                    item_id: data.item_id,
                    price: data.price,
                    status: data.status,
                    stock_quantity: data.stock_quantity,
                    tags: data.tags,
                    image: data.image,
                    slug: data.slug
                }));
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
                setLoading(false);
            });
    };

    const fetchCategories = () => {
        axios.get(`${baseUrl}categories/`)
            .then((response) => {
                setCategories(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    };

    const inputHandler = (event) => {
        const { name, value } = event.target;

        if (name === 'name') {
            const slug = value.trim().replace(/\s+/g, '-').toLowerCase();
            setProductData({
                ...productData,
                [name]: value,
                slug: slug
            });
        } else if (name === 'category') {
            setProductData({
                ...productData,
                [name]: value
            });
        } else {
            setProductData({
                ...productData,
                [name]: value
            });
        }
    };

    const fileHandler = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProductData({
                ...productData,
                image: file
            });

            console.log(productData.image);
            
                
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('vendor', vendorContext.vendorId);
        formData.append('category', productData.category);
        formData.append('name', productData.name);
        formData.append('status', productData.status);
        formData.append('item_id', productData.product_id);
        formData.append('slug', productData.slug);
        formData.append('description', productData.description);
        formData.append('price', productData.price);
        formData.append('stock_quantity', productData.stock_quantity);
        formData.append('tags', productData.tags);
        console.log(productData.image);
        
        if (productData.image instanceof File) {
            formData.append('image', productData.image);
        }
        else { 
            fetch(productData.image)
                .then(response => response.blob()) // Convert image URL to Blob
                .then(blob => {
                    // Create a file from the Blob (optional: specify a filename and mime type)
                    const file = new File([blob], 'product_image.jpg', { type: blob.type });

                    // Append the file to FormData
                    formData.append('image', file);
                })
                .catch(error => {
                    console.error('Error converting image URL to file:', error);
                });            
        }

        axios.put(`${baseUrl}products/update-product/${product_id}/`, formData)
            .then((response) => {
                setMessage({
                    text: 'Product updated successfully!',
                    type: 'success'
                });
                setProductData({
                    vendor: vendorContext.vendorId,
                    category: '',
                    name: '',
                    product_id: '',
                    description: '',
                    item_id: '',
                    price: '',
                    stock_quantity: '',
                    tags: '',
                    image: '',
                    slug: ''
                });
                setImagePreview('');
            })
            .catch((error) => {
                console.error(error);
                setMessage({
                    text: 'Failed to update product. Please try again.',
                    type: 'error'
                });
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const fallbackImage = 'https://via.placeholder.com/150';

    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar />
                </div>
                <div className='col-md-9 col-12 mb-1'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Update Product</h4>
                        </div>
                        <div className="card-body mt-1">
                            {message.text && (
                                <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                                    {message.text}
                                </div>
                            )}
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="status" className="form-label fw-bold">Product status</label>
                                    <select
                                        className="form-select"
                                        onChange={inputHandler}
                                        value={productData.status}
                                        id="status"
                                        name="status"
                                        required
                                    >
                                        {['active', 'inactive', 'discontinued'].map((status) => (
                                            <option key={status} value={status}>
                                                {status}
                                            </option>   
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label fw-bold">Category</label>
                                    <select
                                        className="form-select"
                                        onChange={inputHandler}
                                        value={productData.category}
                                        id="category"
                                        name="category"
                                        required
                                    >
                                        <option className='text-muted' value="">Select Category</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>{category.title}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="product_name" className="form-label fw-bold">Product Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={inputHandler}
                                        value={productData.name}
                                        id="product_name"
                                        name="name"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="product_id" className="form-label fw-bold">Product Id</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={inputHandler}
                                        value={productData.product_id}
                                        id="product_id"
                                        name="product_id"
                                        disabled
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="tags" className="form-label fw-bold">Product Tags</label>
                                    <textarea
                                        className="form-control"
                                        onChange={inputHandler}
                                        value={productData.tags}
                                        id="tags"
                                        name="tags"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label fw-bold">Description</label>
                                    <textarea
                                        className="form-control"
                                        onChange={inputHandler}
                                        value={productData.description}
                                        id="description"
                                        name="description"
                                        rows="4"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label fw-bold">Price (₹)</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        onChange={inputHandler}
                                        value={productData.price}
                                        id="price"
                                        name="price"
                                        step="0.01"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="stock_quantity" className="form-label fw-bold">Stock Quantity</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        onChange={inputHandler}
                                        value={productData.stock_quantity}
                                        id="stock_quantity"
                                        name="stock_quantity"
                                        min="0"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label fw-bold">Featured Image</label>
                                    <input
                                        type="file"
                                        onChange={fileHandler}
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                    />
                                    <div className='mt-3'>
                                        <img
                                            src={imagePreview || productData.image || fallbackImage}
                                            alt="Product Preview"
                                            width="150"
                                            height="150"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>
                                

                                <div className="mt-5">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={!productData.name || !productData.description || !productData.price || !productData.stock_quantity || !productData.category}
                                    >
                                        Update Product
                                    </button>
                                    <Link to={`/vendor/add-product-image/${product_id}`} className="ms-2 btn btn-success" >Update Product Images</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UpdateProduct;
