import Sidebar from './Sidebar';
import { useEffect, useContext, useState } from 'react';
import UserContext from '../../Context';
import { Link } from 'react-router-dom';

function Dashboard() {
    const userContext = useContext(UserContext);
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [totalCount, setTotalCount] = useState({
        ordersCount: 0,
        wishlistCount: 0,
        addressCount:0
    });

    if (!userContext.customerLogin) {
        window.location.href = '/customer/login';
    }
    useEffect(() => {
        fetchData(`${baseUrl}customer/dashboard/${userContext.customerId}/`);
    }, [userContext]);

    function fetchData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                
                setTotalCount({...data});
            });
    }
    console.log(totalCount);
    
    
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Orders</h4>
                                    <h4><Link to='/customer/orders/'>{totalCount?.ordersCount}</Link></h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Wishlist</h4>
                                    <h4><Link to='/customer/wishlist/'>{totalCount?.wishlistCount}</Link></h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Total Addresses</h4>
                                    <h4><Link to='/customer/addresses/'>{totalCount?.addressCount}</Link></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;