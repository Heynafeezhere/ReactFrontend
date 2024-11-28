import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
import { Link } from 'react-router-dom';

function Home() {
    const products = [
        { 'id': 1, 'name': 'Product title - 1', 'price': 'Rs. 500' },
        { 'id': 2, 'name': 'Product title - 2', 'price': 'Rs. 500' },
        { 'id': 3, 'name': 'Product title - 3', 'price': 'Rs. 500' },
        { 'id': 4, 'name': 'Product title - 4', 'price': 'Rs. 500' },
        { 'id': 5, 'name': 'Product title - 5', 'price': 'Rs. 500' },
        { 'id': 6, 'name': 'Product title - 6', 'price': 'Rs. 500' },
        { 'id': 7, 'name': 'Product title - 7', 'price': 'Rs. 500' },
        { 'id': 8, 'name': 'Product title - 8', 'price': 'Rs. 500' },
    ]
    return (
        <main className='mt-4'>
            <div className="container">
                {/* Latest Products */}
                <h3 className='mb-4'>Latest Products
                    <Link to='/allproducts' className='float-end btn btn-dark'>View All Products <i className="fa-solid fa-arrow-right"></i></Link>
                </h3>
                <div className="row mb-4">
                    {
                        products.map((product) => <SingleProduct product={product} />)
                    }
                </div>
                {/* Popular Products End*/}

                {/* Popular Categories */}
                <h3 className='mb-4'>Popular Categories
                    <Link to='/categories' className='float-end btn btn-dark'>View All Categories <i className="fa-solid fa-arrow-right"></i></Link>
                </h3>
                <div className="row mb-4">
                    {/* Categories Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title"><Link to="/category/fashion/1">Fashion</Link></h4>
                            </div>
                            <div className='card-footer'>
                                Product Downloads : 2546
                            </div>
                        </div>
                    </div>
                    {/* Categories Box End*/}
                    {/* Categories Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title"><Link to="/">Category title</Link></h4>
                            </div>
                            <div className='card-footer'>
                                Product Downloads : 2546
                            </div>
                        </div>
                    </div>
                    {/* Categories Box End*/}
                    {/* Categories Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title"><Link to="/">Category title</Link></h4>
                            </div>
                            <div className='card-footer'>
                                Product Downloads : 2546
                            </div>
                        </div>
                    </div>
                    {/* Categories Box End*/}
                    {/* Categories Box */}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card">
                            <img src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title"><Link to="/">Category title</Link></h4>
                            </div>
                            <div className='card-footer'>
                                Product Downloads : 2546
                            </div>
                        </div>
                    </div>
                    {/* Categories Box End*/}
                </div>
                {/* popular Categories End*/}

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