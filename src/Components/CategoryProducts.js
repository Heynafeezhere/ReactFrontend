import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
function CategoryProducts() {
    return (
        <section className="container mt-4">
            {/* Latest Products */}
            <h3 className='mb-4'><span className='text-dark'>Fashion</span> Products
            </h3>
            <div className="row mb-4">
               <SingleProduct title='Product title - 1' price='Rs. 500' />
               <SingleProduct title='Product title - 2' price='Rs. 500' />
               <SingleProduct title='Product title - 3' price='Rs. 500' />
               <SingleProduct title='Product title - 4' price='Rs. 500' />
               <SingleProduct title='Product title - 5' price='Rs. 500' />
               <SingleProduct title='Product title - 6' price='Rs. 500' />
               <SingleProduct title='Product title - 7' price='Rs. 500' />
               <SingleProduct title='Product title - 8' price='Rs. 500' />
            </div>
            {/* Latest Products End*/}
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </section>
    )
}

export default CategoryProducts;