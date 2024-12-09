import logo from '../logo.svg';
import SingleProduct from './Products/SingleProduct';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

function Home() {
    const baseurl = "http://127.0.0.1:8000/api/";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const limit_products = 8
    const limit_categories = 4
    useEffect(() => {
        fetchProducts(`${baseurl}products/?fetch_limit=${limit_products}`);
        fetchCategories(`${baseurl}categories/?fetch_limit=${limit_categories}`);
    }, [limit_products,limit_categories]); // Effect runs whenever fetch_limit changes

    function fetchProducts(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.results);
            });
    }

    function fetchCategories(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data.results);
            });
    }
    

    return (
        <main className='mt-4'>
            <div className="container">
                {/* Latest Products */}
                <h3 className='mb-4'>Latest Products
                    <Link to='/products' className='float-end btn btn-dark'>View All Products <i className="fa-solid fa-arrow-right"></i></Link>
                </h3>
                <div className="row mb-4">
                    {
                        products.map((product) => <SingleProduct key={product.id} product={product} />)
                    }
                </div>
                {/* Popular Products End*/}

                {/* Popular Categories */}
                <h3 className='mb-4'>Popular Categories
                    <Link to='/categories' className='float-end btn btn-dark'>View All Categories <i className="fa-solid fa-arrow-right"></i></Link>
                </h3>
                <div className="row mb-4">
                    {categories.map((category) => (
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img src={logo} className="card-img-top" alt={category.title} />
                                <div className="card-body">
                                    <h4 className="card-title"><Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link></h4>
                                </div>
                                <div className='card-footer'>
                                    Products : 2546
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                { }

                {/* Popular Vendors */}
                <h3 className='mb-4'>Popular Vendors
                    <a href='#' className='float-end btn btn-dark'>View All Vendors <i className="fa-solid fa-arrow-right"></i></a>
                </h3>
                <div className="row mb-4">
                    {/* Vendor Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Vendor title</h4>
                            </div>
                            <div className='card-footer'>
                                Categories : <a href='#'>React</a>, <a href='#'>Django</a>
                            </div>
                        </div>
                    </div>
                    {/* Vendor Box End*/}
                    {/* Vendor Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Vendor title</h4>
                            </div>
                            <div className='card-footer'>
                                Categories : <a href='#'>React</a>, <a href='#'>Django</a>
                            </div>
                        </div>
                    </div>
                    {/* Vendor Box End*/}
                    {/* Vendor Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Vendor title</h4>
                            </div>
                            <div className='card-footer'>
                                Categories : <a href='#'>React</a>, <a href='#'>Django</a>
                            </div>
                        </div>
                    </div>
                    {/* Vendor Box End*/}
                    {/* Vendor Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Vendor title</h4>
                            </div>
                            <div className='card-footer'>
                                Categories : <a href='#'>React</a>, <a href='#'>Django</a>
                            </div>
                        </div>
                    </div>
                    {/* Vendor Box End*/}
                </div>
                {/* Popular Vendors End*/}

                {/* Rating and Reviews */}
                <div id="carouselExampleIndicators" className="carousel slide mt-4 border bg-dark text-white p-5" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <i className='fa fa-star text-warning'></i>
                                    <i className='fa fa-star text-warning'></i>
                                    <i className='fa fa-star text-warning'></i>
                                    <i className='fa fa-star-half-stroke text-warning'></i>
                                    <cite title="Source Title">Customer Name</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="carousel-item">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <i className='fa fa-star text-warning'></i>
                                    <i className='fa fa-star text-warning'></i>
                                    <i className='fa fa-star-half-stroke text-warning'></i>
                                    <cite title="Source Title">Customer Name</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="carousel-item">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <i className='fa fa-star text-warning'></i>
                                    <i className='fa fa-star text-warning'></i>
                                    <i className='fa fa-star-half-stroke text-warning'></i>
                                    <cite title="Source Title">Customer Name</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Rating and Reviews ENd*/}

            </div>
        </main>
    )
}

export default Home;