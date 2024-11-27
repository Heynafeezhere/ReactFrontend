function Login() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className="col-md-8 col-12 offset-2">
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Customer Registration</h4>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3">
                                    <label for="email" className="form-label"><h5>Username/Email</h5></label>
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

export default Login;