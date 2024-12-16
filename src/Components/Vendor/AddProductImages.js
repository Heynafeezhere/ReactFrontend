import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { VendorContext } from '../../Context';
import { useContext } from 'react';
import VendorSidebar from './VendorSidebar';

function AddProductImages() {
    const vendorContext = useContext(VendorContext);
    const [productImages, setProductImages] = useState([5]);
    const [imagePreview, setImagePreview] = useState([]);
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const { product_id } = useParams();

    useEffect(() => {
        if (!vendorContext.vendorLogin) {
            window.location.href = '/vendor/login';
        }
        fetchProductImages();
    }, [vendorContext]);

    function fetchProductImages() {
        fetch(`${baseUrl}vendor/${vendorContext.vendorId}/products/${product_id}/images/`)
            .then((response) => response.json())
            .then((data) => {
                setProductImages(data.results);
                setImagePreview(data.results.map((image) => image.image));
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
            });
    }

    const fileHandler = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const updatedImages = [...productImages];

            updatedImages[index] = file;
            setProductImages(updatedImages);

            setImagePreview((prevPreview) => [
                ...prevPreview.slice(0, index),
                URL.createObjectURL(file),
                ...prevPreview.slice(index + 1),
            ]);

        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();

        // Use a Promise.all to handle asynchronous image fetching
        const imagePromises = productImages.map((image, index) => {
            return new Promise((resolve, reject) => {
                if (image instanceof File) {
                    formData.append(`image${index + 1}`, image);
                    resolve();
                }
                else {
                    resolve(); // Resolve if no image (to avoid breaking flow)
                }
            });
        });

        try {
            // Wait for all image promises to finish before submitting
            await Promise.all(imagePromises);

            // Send formData to the backend
            const response = await axios.post(
                `${baseUrl}vendor/${vendorContext.vendorId}/products/${product_id}/update-images/`,
                formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    }
                    
                }
            );
            window.location.href = `/vendor/products/`
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    };



    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className="col-md-3 col-12 mb-2">
                    <VendorSidebar />
                </div>
                <div className="col-md-9 col-12 mb-1">
                    <div className="card">
                        <div className="card-header">
                            <h4>Update Images</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <label htmlFor="image" className="form-label fw-bold">Product Preview</label>
                                <div className="mt-2 mb-3">
                                    {productImages.map((productImage, index) => (
                                        <img
                                            key={index}
                                            src={imagePreview[index] || productImage.image}
                                            alt="Product Preview"
                                            width="150"
                                            height="150"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    ))}
                                </div>

                                {['image1', 'image2', 'image3', 'image4', 'image5'].map((image, index) => (
                                    <div key={index} className="mb-3">
                                        <label htmlFor={image} className="form-label fw-bold">
                                            Upload Product Image-{index + 1}
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id={image}
                                            onChange={(e) => fileHandler(e, index)}
                                            name={image}
                                            accept="image/*"
                                        />
                                    </div>
                                ))}

                                <div className="mt-3">
                                    <button type="button" onClick={handleSubmit} className="btn btn-primary">
                                        Update Image
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddProductImages;
