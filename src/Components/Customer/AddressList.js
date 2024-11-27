import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function AddressList() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link className='btn btn-outline-success float-end mb-2' to='/customer/add-address'>
                                <i className='fa fa-plus'/>
                                 Add address
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 mb-4'>
                            <div className='card shadow'>
                                <div className='card-body'>
                                    <i className='fa fa-check-circle text-success'></i>
                                    <h6>No:123, Road st, New Kandigai, Sayanapuram Post, Arakkonam Tk, Tirunelveli District, Tamil Nadu - 627002</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                    <span className='badge bg-secondary mt-1 mb-2'>Mark default</span>
                                    <h6>No:123, Road st, New Kandigai, Sayanapuram Post, Arakkonam Tk, Tirunelveli District, Tamil Nadu - 627002</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                    <span className='badge bg-secondary mt-1 mb-2'>Mark default</span>
                                    <h6>No:123, Road st, New Kandigai, Sayanapuram Post, Arakkonam Tk, Tirunelveli District, Tamil Nadu - 627002</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                    <span className='badge bg-secondary mt-1 mb-2'>Mark default</span>
                                    <h6>No:123, Road st, New Kandigai, Sayanapuram Post, Arakkonam Tk, Tirunelveli District, Tamil Nadu - 627002</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                    <span className='badge bg-secondary mt-1 mb-2'>Mark default</span>
                                    <h6>No:123, Road st, New Kandigai, Sayanapuram Post, Arakkonam Tk, Tirunelveli District, Tamil Nadu - 627002</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 mb-4'>
                            <div className='card'>
                                <div className='card-body text-muted'>
                                    <span className='badge bg-secondary mt-1 mb-2'>Mark default</span>
                                    <h6>No:123, Road st, New Kandigai, Sayanapuram Post, Arakkonam Tk, Tirunelveli District, Tamil Nadu - 627002</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddressList;