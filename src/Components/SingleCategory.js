import logo from '../logo.svg';
import { Link } from 'react-router-dom';
function SingleCategory(props) {
    return (
        < div className = "col-12 col-md-3 mb-4" >
            <div className="card">
                <img src={logo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title"><Link to="/category/fashion/1">Fashion</Link></h4>
                </div>
                <div className='card-footer'>
                    Product Downloads : 2546
                </div>
            </div>
    </div >
    )
}

export default SingleCategory;