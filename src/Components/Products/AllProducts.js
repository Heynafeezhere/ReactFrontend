import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

function AllProducts() {
    const baseurl = "http://127.0.0.1:8000/api/";
    const [products, setProducts] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(10); // Default page size (adjust based on API response)

    const location = useLocation();

    // Extract page number from query string
    const query = new URLSearchParams(location.search);
    const currentPage = parseInt(query.get("page")) || 1; // Default to page 1 if not present

    // Ensure currentPage doesn't exceed total pages
    const totalPages = Math.ceil(totalCount / pageSize);
    const adjustedPage = Math.min(currentPage, totalPages) || 1;

    useEffect(() => {
        fetchData(`${baseurl}products/?page=${adjustedPage}`);
    }, [adjustedPage]); // Effect runs whenever adjustedPage changes

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.results);
                setTotalCount(data.count);
                if (data.page_size) setPageSize(data.page_size); // Optional if the API provides `page_size`
            });
    }
    
    // Generate pagination links
    const links = [];
    for (let i = 1; i <= totalPages; i++) {
        links.push(
            <li
                key={i}
                className={`page-item ${adjustedPage === i ? "active" : ""}`}
            >
                <Link
                    className="page-link"
                    to={`/products/?page=${i}`}
                >
                    {i}
                </Link>
            </li>
        );
    }

    return (
        <div className="container mt-4">
            <h3 className="mb-4">All Products</h3>
            <div className="row mb-4">
                {products.map((product) => (
                    <SingleProduct key={product.id} product={product} />
                ))}
            </div>
            {/* Pagination */}
            <nav aria-label="Page navigation example">
                <ul className="pagination">{links}</ul>
            </nav>
        </div>
    );
}

export default AllProducts;
