import { Link, useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import SingleProduct from './SingleProduct';
import UserContext, { CartContext } from '../../Context';
function ProductDetail() {
    const baseurl = "http://127.0.0.1:8000/api/product/";
    const [productData, setProductData] = useState(null);
    const [productImages, setProductImages] = useState([]);
    const [productTags, setProductTags] = useState([]);
    const [cartButtonClickStatus, setCartButtonClickStatus] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const { product_id } = useParams();
    const { cartContext, setCartContext } = useContext(CartContext);
    const userContext = useContext(UserContext);

    useEffect(() => {
        fetchData(`${baseurl}${product_id}`);
        fetchRelatedProducts(`${baseurl}related-products/${product_id}`);
        checkProductInCart(product_id);
    }, [product_id]); // Added product_id to dependencies


    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch data");
            const data = await response.json();
            setProductData(data);
            setProductImages(data.product_images || []);
            setProductTags(data.product_tags || []);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    const fetchRelatedProducts = async (relatedProductsUrl) => {
        try {
            const response = await fetch(relatedProductsUrl);
            if (!response.ok) throw new Error("Failed to fetch related products");
            const data = await response.json();
            setRelatedProducts(data);
        } catch (error) {
            console.error("Error fetching related products:", error);
        }
    };

    if (!productData) {
        return <div className="container mt-4">Loading...</div>;
    }

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10));  // Update quantity state
    };

    const productTagsList = []
    for (let i = 0; i < productTags.length; i++) {
        let tag = productTags[i].trim()
        productTagsList.push(
            <Link key={i} to={`/products/${tag}`} className="badge bg-secondary text-white me-1">{tag}</Link>
        )
    }

    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    function checkProductInCart(product_id) {
        var cartData = localStorage.getItem('cart');
        var cartJson = cartData ? JSON.parse(cartData) : [];
        for (let i = 0; i < cartJson.length; i++) {
            if (cartJson[i].product.product_id == product_id) {
                setCartButtonClickStatus(true);
                break;
            }
        }
    }

    const addtoCartHandler = () => {
        var cartJson = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        const addToCartData = {
            'product': {
                'product_id': productData.id,
                'product_name': productData.name,
                'product_price': productData.price,
                'product_image': productData.image,
                'product_quantity': quantity
            },
            'user': {
                'user': userContext.customerName,
            }
        }
        const existingProductIndex = cartJson.findIndex(item => item.product.product_id === productData.id);
        if (existingProductIndex >= 0) {
            // Product already in cart, update the quantity
            cartJson[existingProductIndex].product.product_quantity += quantity;
        } else {
            // Product not in cart, add new item
            cartJson.push(addToCartData);
        }
        localStorage.setItem('cart', JSON.stringify(cartJson));
        setCartContext(cartJson);
        setCartButtonClickStatus(true);
    }

    const removeCartHandler = () => {
        var cartData = localStorage.getItem('cart');
        var cartJson = cartData ? JSON.parse(cartData) : [];
        for (let i = 0; i < cartJson.length; i++) {
            if (cartJson[i].product.product_id === productData.id) {
                cartJson.splice(i, 1);
                break;
            }
        }

        localStorage.setItem('cart', JSON.stringify(cartJson));
        setCartContext(cartJson);
        setCartButtonClickStatus(false);
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
                            <div className="carousel-inner text-center">
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
                <div className="col-8 ">
                    <h3>{productData.name}</h3>
                    <p>{productData.description}</p>
                    <h5 className="card-name mb-3">Price (₹): {productData.price}</h5>
                    <h6 >Quantity</h6>
                    <select className="form-select mt-2" value={quantity} onChange={handleQuantityChange} style={{ width: "auto", maxWidth: "120px" }}>
                        {[...Array(10).keys()].map((num) => (  // Example: Allow quantity from 1 to 10
                            <option key={num + 1} value={num + 1}>{num + 1}</option>
                        ))}
                    </select>
                    <p className="mt-3 mb-3">
                        <Link to={productData.demoLink} className="btn btn-dark btn-block mt-2">
                            <i className="fa fa-video"></i> Demo
                        </Link>
                        <button name="add-to-cart" title='Add to cart' onClick={addtoCartHandler} className="btn btn-primary btn-block mt-2 ms-2">
                            <i className="fa-solid fa-cart-plus"></i> Add to Cart
                        </button>
                        {
                            cartButtonClickStatus &&
                            <button name="remove-cart" title='Add to cart' onClick={removeCartHandler} className="btn btn-danger btn-block mt-2 ms-2">
                                <i className="fa-solid fa-cart-plus"></i> Remove From Cart
                            </button>
                        }
                        <button className="btn btn-success btn-block mt-2 ms-2">
                            <i className="fa fa-bag-shopping"></i> Buy Now
                        </button>
                        <button className="btn btn-danger btn-block mt-2 ms-2">
                            <i className="fa fa-heart"></i> Add to Wishlist
                        </button>
                    </p>
                    <div className="product-tags mt-4">
                        <h5>Tags</h5>
                        {productTagsList}
                    </div>
                </div>
            </div>
            {
                relatedProducts.length > 0 && <>
                    <h3 className="mt-5">Related Products</h3>
                    <div id="relatedProductSlider" className="carousel carousel-dark slide mt-4" data-bs-ride="true">
                        <div className="carousel-indicators">
                            {chunkArray(relatedProducts, 4).map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#relatedProductSlider"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-label={`Slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        {/* Add carousel buttons for related products dynamically */}
                        <div className="carousel-inner">
                            {chunkArray(relatedProducts, 4).map((chunk, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <div className="row mb-5">
                                        {chunk.map((relatedProduct) => (
                                            <SingleProduct key={relatedProduct.id} product={relatedProduct} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }
        </section >
    );
}

export default ProductDetail;
