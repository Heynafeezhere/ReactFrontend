import VendorSidebar from './VendorSidebar';
function Reports() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Daily Reports</h4>
                                    <h4><button className='btn btn-primary btn-sm mt-1'>view</button></h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Montly Reports</h4>
                                    <h4><button className='btn btn-primary btn-sm mt-1'>view</button></h4>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 mb-2'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <h4>Annual Reports</h4>
                                    <h4><button className='btn btn-primary btn-sm mt-1'>view</button></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reports;