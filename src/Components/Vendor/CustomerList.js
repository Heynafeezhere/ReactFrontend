import VendorSidebar from './VendorSidebar';

function CustomerList() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className="table responsive">
                            <table class="table table-bordered table-striped">
                                <thead class="table-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>
                                        <th>Phone Number</th>
                                        <th>Date Joined</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>john_doe</td>
                                        <td>+1 123-456-7890</td>
                                        <td>2024-11-01 14:23:45</td>
                                        <td>
                                            <button className='btn btn-success me-1'>Addresses</button>
                                            <button className='btn btn-primary me-1'>Orders</button>
                                            <button className='btn btn-danger'>Remove</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>jane_smith</td>
                                        <td>+44 20 7946 0958</td>
                                        <td>2024-09-12 10:12:34</td>
                                        <td>
                                            <button className='btn btn-success me-1'>Addresses</button>
                                            <button className='btn btn-primary me-1'>Orders</button>
                                            <button className='btn btn-danger'>Remove</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerList;