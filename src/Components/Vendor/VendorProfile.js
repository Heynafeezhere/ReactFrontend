import VendorSidebar from './VendorSidebar';

function VendorProfile() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <VendorSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Update Vendor Profile</h4>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3">
                                    <label for="firstName" className="form-label"><h5>First Name</h5></label>
                                    <input type="text" className="form-control" id="firstName" />
                                </div>
                                <div className="mb-3">
                                    <label for="lastName" className="form-label"><h5>Last Name</h5></label>
                                    <input type="text" className="form-control" id="lastName" />
                                </div>
                                <div className="mb-3">
                                    <label for="userName" className="form-label"><h5>Username</h5></label>
                                    <input type="text" className="form-control" id="userName" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label"><h5>Email</h5></label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label for="profilePicture" className="form-label">
                                        <h5>Upload Profile Picture</h5>
                                    </label>
                                    <input type="file" className="form-control" id="profilePicture" accept="image/*" />
                                </div>
                                <div className="mt-5">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    <button type="reset" className="btn btn-danger ms-2">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VendorProfile;