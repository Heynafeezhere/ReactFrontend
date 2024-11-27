import Sidebar from './Sidebar';

function AddAddress() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Add Address</h4>
                        </div>
                        <div className="card-body mt-2">
                            <form>
                                <div className="mb-3">
                                    <label for="address_line1" className="form-label">Address Line 1</label>
                                    <input type="text" className="form-control" id="address_line1" name="address_line1" maxlength="255" required/>
                                </div>
                                <div className="mb-3">
                                    <label for="address_line2" className="form-label">Address Line 2</label>
                                    <input type="text" className="form-control" id="address_line2" name="address_line2" maxlength="255"/>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="city" className="form-label">City</label>
                                        <input type="text" className="form-control" id="city" name="city" maxlength="100" required/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="state" className="form-label">State</label>
                                        <input type="text" className="form-control" id="state" name="state" maxlength="100" required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="zip_code" className="form-label">Zip Code</label>
                                        <input type="text" className="form-control" id="zip_code" name="zip_code" maxlength="10" required/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="country" className="form-label">Country</label>
                                        <input type="text" className="form-control" id="country" name="country" maxlength="100" required/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddAddress;