import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../Context';
function Header() {
    const userContext = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/">ThinkUni</Link>
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li key='home' className="nav-item">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li key='categories' className="nav-item">
                            <Link className="nav-link" to="/categories">Categories</Link>
                        </li>
                        <li key='customerDropdown' className="nav-item dropdown">
                            <ul className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {userContext.customerName ? userContext.customerName : 'Customer panel'}
                            </ul>
                            {
                                !userContext.customerLogin ?
                                    <ul className="dropdown-menu">
                                        <li key='register'><Link className="dropdown-item" to='/customer/register'>Register</Link></li>
                                        <li key='login'><Link className="dropdown-item" to='/customer/login'>Login</Link></li>
                                    </ul>
                                    :
                                    <ul className="dropdown-menu">
                                        <li key='dashboard'><Link className="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
                                        <li key='logout'><Link className="dropdown-item" to="/customer/logout">Logout</Link></li>
                                    </ul>
                            }
                        </li>
                        <li key='cart' className="nav-item">
                            <Link className="nav-link" to="/checkout">Cart<span>(4)</span></Link>
                        </li>
                        {
                            !userContext.customerLogin &&
                            <>
                                <li key='vendorPanel' className="nav-item dropdown">
                                    <ul className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Vendor panel
                                    </ul>
                                    <ul className="dropdown-menu">
                                        <li key='vendorRegister'><Link className="dropdown-item" to='/vendor/register'>Register</Link></li>
                                        <li key='vendorLogin' ><Link className="dropdown-item" to='/vendor/login'>Login</Link></li>
                                        <li key='vendorDivder'><hr className="dropdown-divider" /></li>
                                        <li key='vendorDashboard'><Link className="dropdown-item" to="/vendor/dashboard">Dashboard</Link></li>
                                        <li key='vendorLogout'><Link className="dropdown-item" to='/vendor/logout'>Sign out</Link></li>
                                    </ul>
                                </li>
                                <li key='orders' className="nav-item">
                                    <Link className="nav-link" to="/checkout">Orders<span>(4)</span></Link>
                                </li>
                            </>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;