import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ProductDetail() {
    const baseurl = "http://127.0.0.1:8000/api/product/";
    const [productData, setProductData] = useState(null);
    const [productImages, setProductImages] = useState([]);
    const [productTags, setproductTags] = useState([]);
    const { product_id } = useParams();

    useEffect(() => {
        fetchData(`${baseurl}${product_id}`);
    }, [product_id]); // Added product_id to dependencies

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch data");
            const data = await response.json();
            setProductData(data);
            setProductImages(data.product_images || []);
            setproductTags(data.product_tags || []);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    if (!productData) {
        return <div className="container mt-4">Loading...</div>;
    }

    const productTagsList = []
    for (let i = 0; i < productTags.length; i++) {
        let tag = productTags[i].trim()
        productTagsList.push(
            <Link key={i} to={`/products/${tag}`} className="badge bg-secondary text-white me-1">{tag}</Link>
        )
    }

    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    {productImages.length > 0 && (
                        <div id="productThumbnailSlider" className="carousel carousel-dark slide" data-bs-ride="true">
                            <div className="carousel-indicators">
                                {productImages.map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        data-bs-target="#productThumbnailSlider"
                                        data-bs-slide-to={index}
                                        className={index === 0 ? "active" : ""}
                                        aria-label={`Slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="carousel-inner">
                                {productImages.map((productImage, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <img
                                            src={productImage.image}
                                            className="img-thumbnail mb-5"
                                            alt={productImage.alt_text || "Product image"}
                                        />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    )}
                </div>
                <div className="col-8">
                    <h3>{productData.name}</h3>
                    <p>{productData.description}</p>
                    <h5 className="card-name">Price (₹): {productData.price}</h5>
                    <p className="mt-3">
                        <button className="btn btn-dark btn-block">
                            <i className="fa fa-video"></i> Demo
                        </button>
                        <button className="btn btn-primary btn-block ms-2">
                            <i className="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                        <button className="btn btn-success btn-block ms-2">
                            <i className="fa fa-bag-shopping"></i> Buy Now
                        </button>
                        <button className="btn btn-danger btn-block ms-2">
                            <i className="fa fa-heart"></i> Add to Wishlist
                        </button>
                    </p>
                    <div className="product-tags mt-4">
                        <h5>Tags</h5>
                        {productTagsList}
                    </div>
                </div>
            </div>
            {/* Placeholder for Related Products */}
            <h3 className="mt-5">Related Products</h3>
            <div className="carousel carousel-dark slide mt-4" data-bs-ride="true">
                <div className="carousel-indicators">
                    {/* Add carousel buttons for related products dynamically */}
                </div>
                {/* Add carousel items dynamically */}
            </div>
        </section>
    );
}

export default ProductDetail;
