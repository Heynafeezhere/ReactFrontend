import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { VendorContext } from '../../Context';
import { useContext } from 'react';
import VendorSidebar from './VendorSidebar';

function AddProductImages() {
    const vendorContext = useContext(VendorContext);
    const [productImages, setProductImages] = useState([]);
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const { product_id } = useParams();

    useEffect(() => {
        if (!vendorContext.vendorLogin) {
            window.location.href = '/vendor/login';
        }
        fetchProductImages();
    }, [vendorContext]);

    function fetchProductImages(){ 
        fetch(`${baseUrl}vendor/${vendorContext.vendorId}/products/${product_id}/images/`)
            .then((response) => response.json())
            .then((data) => {
                setProductImages(data.results);
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
            });
    }
    console.log(productImages);
    
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar />
                </div>
                <div className='col-md-9 col-12 mb-1'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Update Images</h4>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label fw-bold">Upload Product Image-1</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        multiple
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label fw-bold">Upload Product Image-2</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        multiple
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label fw-bold">Upload Product Image-3</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        multiple
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label fw-bold">Upload Product Image-4</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        multiple
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label fw-bold">Upload Product Image-5</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        accept="image/*"
                                        multiple
                                    />
                                </div>
                                <div className="mt-3">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                    >
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