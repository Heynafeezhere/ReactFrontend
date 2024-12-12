import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function VendorLogin() {
    const baseUrl = "http://127.0.0.1:8000/api/";
    const initialFormData = {
        email: '',
        password: ''
    };

    const [loginFormData, setLoginFormData] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState('');

    // Input handler to update form data on change
    const inputHandler = (event) => {
        setLoginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value
        });
        console.log(loginFormData);
    };

    // Submit handler to send the login request to the API
    const submitHandler = () => {
        const submitFormData = new FormData();
        submitFormData.append('email', loginFormData.email);
        submitFormData.append('password', loginFormData.password);

        // Send the login request to the vendor login endpoint
        axios.post(`${baseUrl}vendor/login/`, submitFormData)
            .then((response) => {
                setErrorMessage('');
                console.log(response.data);
                localStorage.setItem('vendor_login', true); // Save vendor login state
                localStorage.setItem('vendor_id', response.data.userId); // Save vendor ID
                localStorage.setItem('vendor_username', response.data.user); // Save vendor username
                window.location.href = '/vendor/dashboard'; // Redirect to vendor dashboard
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage(error.response?.data?.error || "An error occurred");
            });
    };

    // Check if vendor is already logged in, if so, redirect them
    const checkVendor = localStorage.getItem('vendor_login');
    if (checkVendor) {
        window.location.href = '/vendor/dashboard';
    }

    // Reset form data
    const resetFormData = () => {
        setLoginFormData(initialFormData);
        setErrorMessage('');
    };

    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className="col-md-8 col-12 offset-2">
                    <div className="card">
                        <div className="card-header">
                            <h4>Vendor Login</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Email</h5></label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={loginFormData.email}
                                        onChange={inputHandler}
                                        className="form-control"
                                        placeholder="Enter vendor email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Password</h5></label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={loginFormData.password}
                                        onChange={inputHandler}
                                        className="form-control"
                                        placeholder="Enter vendor password"
                                    />
                                </div>
                                <button
                                    type="button"
                                    disabled={loginFormData.email === '' || loginFormData.password === ''}
                                    onClick={submitHandler}
                                    className="btn btn-success"
                                >
                                    Submit
                                </button>
                                <button
                                    type="reset"
                                    onClick={resetFormData}
                                    className="btn btn-dark ms-2"
                                >
                                    Reset
                                </button>
                                {errorMessage && <p className="text-danger mt-1">{errorMessage}</p>}
                                <p className="mt-2">
                                    Don't have an account? <Link to="/vendor/register/">Register</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VendorLogin;
