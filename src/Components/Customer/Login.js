import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
function CustomerLogin() {
    const baseUrl = "http://127.0.0.1:8000/api/"
    const initialFormData = {
        email: '',
        password: ''
    };

    const [loginFormData, setLoginFormData] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState('');
    const inputHandler = (event) => {
        setLoginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value
        });
    }
    const submitHandler = () => {
        const submitFormData = new FormData();
        submitFormData.append('email', loginFormData.email);
        submitFormData.append('password', loginFormData.password);
        axios.post(`${baseUrl}customer/login/`, submitFormData).then((response) => {
            setErrorMessage('')
            console.log(response.data)
            console.log(jwtDecode(response.data.accessToken));
            localStorage.setItem('customer_login', true);
            localStorage.setItem('customer_id', response.data.userId);
            localStorage.setItem('customer_username', response.data.user);
        }).catch((error) => {
            console.log(error);
            setErrorMessage(error.response.data.error);
        });
    }
  
    const checkCustomer = localStorage.getItem('customer_login');
    if (checkCustomer) {
        // window.location.href = '/';
    }

    const resetFormData = () => {
        setLoginFormData(initialFormData);
        setErrorMessage('');
    }
    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className="col-md-8 col-12 offset-2">
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Customer Login</h4>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Email</h5></label>
                                    <input type="email" name="email" value={loginFormData.email} onChange={inputHandler} className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Password</h5></label>
                                    <input type="password" name="password" value={loginFormData.password} onChange={inputHandler} className="form-control" id="password" />
                                </div>
                                <button type="button" disabled={loginFormData.email === '' || loginFormData.password === ''} onClick={submitHandler} className="btn btn-success">Submit</button>
                                <button type="reset" onClick={resetFormData} className="btn btn-dark ms-2">Reset</button>
                                {
                                    errorMessage && <p className="text-danger mt-1">{errorMessage}!!</p>
                                }
                                <p className="mt-2">Don't have an account? <Link to="/customer/register">Register</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerLogin;