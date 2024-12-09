import Sidebar from './Sidebar';

function ChangePassword() {
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className='col-md-3 col-12 mb-2'>
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Change Password</h4>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3">
                                    <label for="currentPassword" className="form-label"><h5>Current Password</h5></label>
                                    <input type="password" className="form-control" id="firstName" />
                                </div>
                                <div className="mb-3">
                                    <label for="newPassword" className="form-label"><h5>New Password</h5></label>
                                    <input type="password" className="form-control" id="firstName" />
                                </div>
                                <div className="mb-3">
                                    <label for="comnfirmNewPassword" className="form-label"><h5>Confirm New Password</h5></label>
                                    <input type="password" className="form-control" id="firstName" />
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

export default ChangePassword;