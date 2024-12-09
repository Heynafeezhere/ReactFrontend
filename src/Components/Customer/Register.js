import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
    const baseUrl = "http://127.0.0.1:8000/api/";
    
    const initialFormData = {
        firstName: '',
        lastName: '',
        userName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        countryCode: '+91',  // Default country code (India)
    };

    const [registerFormData, setRegisterFormData] = useState(initialFormData);
    const [errorMessage, setErrorMessage] = useState('');

    const inputHandler = (event) => {
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value
        });
    };

    const resetFormData = () => {
        setRegisterFormData(initialFormData);
        setErrorMessage('');
    };

    // Phone number validation with country code (starts with selected country code + followed by the phone number)
    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\+(\d{1,4})\d{7,14}$/; // Starts with +, followed by a country code (1-4 digits), then the phone number (7-14 digits)
        return phoneRegex.test(phoneNumber);
    };

    // Password validation (minimum 8 characters, 1 uppercase, 1 number, 1 special char)
    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        return passwordRegex.test(password);
    };

    const submitHandler = () => {
        // Combine the selected country code with the entered phone number
        const fullPhoneNumber = registerFormData.countryCode + registerFormData.phoneNumber;

        // Validate phone number
        if (!validatePhoneNumber(fullPhoneNumber)) {
            setErrorMessage("Invalid phone number. Please include a valid country code (e.g., +1 for USA).");
            return;
        }

        // If passwords do not match, prevent submission
        if (registerFormData.password !== registerFormData.confirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        // Validate password strength
        if (!validatePassword(registerFormData.password)) {
            setErrorMessage("Password must be at least 8 characters long, contain 1 uppercase letter, 1 number, and 1 special character.");
            return;
        }

        const submitFormData = new FormData();
        submitFormData.append('firstName', registerFormData.firstName);
        submitFormData.append('lastName', registerFormData.lastName);
        submitFormData.append('userName', registerFormData.userName);
        submitFormData.append('phoneNumber', fullPhoneNumber);  // Send full phone number with country code
        submitFormData.append('email', registerFormData.email);
        submitFormData.append('password', registerFormData.password);

        // Change URL to the actual registration endpoint (adjust it as per your API)
        axios.post(`${baseUrl}customer/register/`, submitFormData)
            .then((response) => {
                setErrorMessage('');
                resetFormData();
                window.location.href = '/customer/login';
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage(error.response?.data?.error || "An error occurred");
            });
    };

    const enableSubmit = () => {
        // Check if all fields are filled and passwords match
        return (
            registerFormData.firstName !== '' &&
            registerFormData.lastName !== '' &&
            registerFormData.userName !== '' &&
            registerFormData.email !== '' &&
            registerFormData.password !== '' &&
            registerFormData.confirmPassword !== ''
        );
    };

    const checkPassword = (event) => {
        // Handle password confirmation field validation
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className="col-md-8 col-12 offset-2">
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Customer Registration</h4>
                            <p className="text-muted"> Already have an account ? <Link to="/customer/login">Login</Link></p>
                        </div>
                        <div className='card-body'>
                            <form>
                                <p className="text-muted">** All fields are required **</p>
                                <div className="mb-3">
                                    <label className="form-label"><h5>First Name</h5></label>
                                    <input
                                        type="text"
                                        onChange={inputHandler}
                                        value={registerFormData.firstName}
                                        name="firstName"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="Enter First Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Last Name</h5></label>
                                    <input
                                        type="text"
                                        onChange={inputHandler}
                                        value={registerFormData.lastName}
                                        name="lastName"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Enter Last Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Username</h5></label>
                                    <input
                                        type="text"
                                        onChange={inputHandler}
                                        value={registerFormData.userName}
                                        name="userName"
                                        className="form-control"
                                        id="userName"
                                        placeholder="Enter User Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Phone Number</h5></label>
                                    <div className="input-group">
                                        {/* Country Code Dropdown */}
                                        <select
                                            name="countryCode"
                                            className="form-select-sm me-1"
                                            value={registerFormData.countryCode}
                                            onChange={inputHandler}
                                        >
                                            <option value="+1">+1 (USA)</option>
                                            <option value="+44">+44 (UK)</option>
                                            <option value="+91">+91 (India)</option>
                                            <option value="+61">+61 (Australia)</option>
                                            {/* Add more country codes as needed */}
                                        </select>
                                        {/* Phone Number Input */}
                                        <input
                                            type="text"
                                            onChange={inputHandler}
                                            value={registerFormData.phoneNumber}
                                            name="phoneNumber"
                                            className="form-control"
                                            id="phoneNumber"
                                            placeholder="Enter phone number"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Email</h5></label>
                                    <input
                                        type="email"
                                        onChange={inputHandler}
                                        value={registerFormData.email}
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter Email Id"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label"><h5>Password</h5></label>
                                    <input
                                        type="password"
                                        onChange={inputHandler}
                                        value={registerFormData.password}
                                        name="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter Password"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label"><h5>Confirm Password</h5></label>
                                    <input
                                        type="password"
                                        onChange={checkPassword}  // Fix password matching check
                                        value={registerFormData.confirmPassword}
                                        name="confirmPassword"
                                        className="form-control"
                                        id="confirmPassword"
                                        placeholder="Enter Confirm Password"
                                    />
                                </div>
                                <button
                                    type="button"
                                    disabled={!enableSubmit()}
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
                                {errorMessage && (
                                    <p className="text-danger mt-1">{errorMessage}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
