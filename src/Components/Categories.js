import logo from '../logo.svg';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
function Categories() {
    const baseurl = "http://127.0.0.1:8000/api/";
    const [categories, setCategories] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(10); // Default page size (adjust based on API response)

    const location = useLocation();

    // Extract page number from query string
    const query = new URLSearchParams(location.search);
    var currentPage = parseInt(query.get("page")) || 10; // Default to page 1 if not present

    if (currentPage > totalCount / pageSize) currentPage = 1;

    useEffect(() => {
        fetchData(`${baseurl}categories/?page=${currentPage}`);
    }, [currentPage]);

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data.results);
                setTotalCount(data.count);
                if (data.page_size) setPageSize(data.page_size); // Optional if the API provides `page_size`
            });
    }

    // Calculate total pages
    const totalPages = Math.ceil(totalCount / pageSize);



    const links = [];
    for (let i = 1; i <= totalPages; i++) {
        links.push(
            <li
                key={i}
                className={`page-item ${currentPage === i ? "active" : ""}`}
            >
                <Link
                    className="page-link"
                    to={`/categories/?page=${i}`}
                >
                    {i}
                </Link>
            </li>
        );
    }

    return (
        <section className="container mt-4">
            {/* Categories */}
            <h3 className='mb-4'>All Categories</h3>
            <div className="row mb-4">
                {categories.map((category) => (
                    <div className="col-12 col-md-3 mb-4">
                    <div className="card">
                        <img src={logo} className="card-img-top" alt={category.title} />
                        <div className="card-body">
                            <h4 className="card-title"><Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link></h4>
                        </div>
                        <div className='card-footer'>
                            Product Downloads : 2546
                        </div>
                    </div>
                </div>
                ))}
                {/* Categories Box */}
                
                {/* Categories Box End*/}
                {/* Categories Box */}
                
            </div>
            {/*  Categories End*/}
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {links}
                </ul>
            </nav>
        </section>
    )
}

export default Categories;