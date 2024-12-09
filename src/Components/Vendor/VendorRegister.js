function VendorRegister() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className="col-md-8 col-12 offset-2">
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Vendor Registration</h4>
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
                                    <label for="password" className="form-label"><h5>Password</h5></label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="reset" className="btn btn-danger ms-2">Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VendorRegister;