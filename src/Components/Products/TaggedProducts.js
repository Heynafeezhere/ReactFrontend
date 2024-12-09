import { useState, useEffect } from "react";
import { useLocation, useParams,Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

function TaggedProducts() {
    const baseurl = "http://127.0.0.1:8000/api/products/";
    const [products, setProducts] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const pageSize = 1;
    const { tag } = useParams();

    const location = useLocation();

    // Extract page number from query string
    const query = new URLSearchParams(location.search);
    var currentPage = parseInt(query.get("page")) || 1; // Default to page 1 if not present
    

    if(currentPage>totalCount/pageSize) currentPage = 1;
    
    useEffect(() => {
        fetchData(`${baseurl}${tag}?page=${currentPage}`);
    }, [currentPage]);

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.results);
                setTotalCount(data.count);
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
                    to={`/products/${tag}?page=${i}`}
                >
                    {i}
                </Link>
            </li>
        );
    }

    return (
        <div className="container mt-4">
            <h3 className="mb-4">{tag} Products</h3>
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

export default TaggedProducts;
