import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function VendorRegister() {
    const baseUrl = "http://127.0.0.1:8000/api/";

    const initialFormData = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        description: '',
        contactPerson: '',
        phoneNumber: '',
        countryCode: '+91', // Default country code (India)
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        website: '',
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

    const submitHandler = () => {
        // Check if password and confirm password match
        if (registerFormData.password !== registerFormData.confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        // Combine the selected country code with the entered phone number
        const fullPhoneNumber = registerFormData.countryCode + registerFormData.phoneNumber;

        // Validate phone number
        if (!validatePhoneNumber(fullPhoneNumber)) {
            setErrorMessage("Invalid phone number. Please include a valid country code (e.g., +1 for USA).");
            return;
        }

        const submitFormData = new FormData();
        submitFormData.append('first_name', registerFormData.firstName);
        submitFormData.append('last_name', registerFormData.lastName);
        submitFormData.append('user_name', registerFormData.userName);
        submitFormData.append('email', registerFormData.email);
        submitFormData.append('password', registerFormData.password);
        submitFormData.append('description', registerFormData.description);
        submitFormData.append('contact_person', registerFormData.contactPerson);
        submitFormData.append('phone', fullPhoneNumber);  // Send full phone number with country code
        submitFormData.append('address_line1', registerFormData.addressLine1);
        submitFormData.append('address_line2', registerFormData.addressLine2);
        submitFormData.append('city', registerFormData.city);
        submitFormData.append('state', registerFormData.state);
        submitFormData.append('zip_code', registerFormData.zipCode);
        submitFormData.append('country', registerFormData.country);
        submitFormData.append('website', registerFormData.website);

        // Change URL to the actual vendor registration endpoint (adjust it as per your API)
        axios.post(`${baseUrl}vendor/register/`, submitFormData)
            .then((response) => {
                setErrorMessage('');
                resetFormData();
                window.location.href = '/vendor/login/'; // Redirect to the vendor dashboard or another page
            })
            .catch((error) => {
                console.log(error);
                setErrorMessage(error.response?.data?.error || "An error occurred");
            });
    };

    const enableSubmit = () => {
        // Check if all fields are filled
        return (
            registerFormData.firstName !== '' &&
            registerFormData.lastName !== '' &&
            registerFormData.userName !== '' &&
            registerFormData.email !== '' &&
            registerFormData.password !== '' &&
            registerFormData.confirmPassword !== '' &&
            registerFormData.description !== '' &&
            registerFormData.contactPerson !== '' &&
            registerFormData.phoneNumber !== '' &&
            registerFormData.addressLine1 !== '' &&
            registerFormData.city !== '' &&
            registerFormData.state !== '' &&
            registerFormData.zipCode !== '' &&
            registerFormData.country !== ''
        );
    };

    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className="col-md-8 col-12 offset-2">
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Vendor Registration</h4>
                            <p className="text-muted">Already have an account? <Link to="/vendor/login">Login</Link></p>
                        </div>
                        <div className='card-body'>
                            <form>
                                <p className="text-muted">** All fields are required **</p>

                                <div className="mb-3">
                                    <label className="form-label"><h5>First Name</h5></label>
                                    <input
                                        onChange={inputHandler}
                                        value={registerFormData.firstName}
                                        name="firstName"
                                        className="form-control"
                                        placeholder="Enter vendor First Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Last Name</h5></label>
                                    <input
                                        onChange={inputHandler}
                                        value={registerFormData.lastName}
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Enter vendor Last Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Username</h5></label>
                                    <input
                                        onChange={inputHandler}
                                        value={registerFormData.userName}
                                        name="userName"
                                        className="form-control"
                                        placeholder="Enter vendor username"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>E-mail</h5></label>
                                    <input
                                        onChange={inputHandler}
                                        value={registerFormData.email}
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter vendor email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Password</h5></label>
                                    <input
                                        type="password"
                                        onChange={inputHandler}
                                        value={registerFormData.password}
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter vendor password"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Confirm Password</h5></label>
                                    <input
                                        type="password"
                                        onChange={inputHandler}
                                        value={registerFormData.confirmPassword}
                                        name="confirmPassword"
                                        className="form-control"
                                        placeholder="Confirm vendor password"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Description</h5></label>
                                    <textarea
                                        onChange={inputHandler}
                                        value={registerFormData.description}
                                        name="description"
                                        className="form-control"
                                        placeholder="Enter vendor description"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Contact Person</h5></label>
                                    <input
                                        type="text"
                                        onChange={inputHandler}
                                        value={registerFormData.contactPerson}
                                        name="contactPerson"
                                        className="form-control"
                                        placeholder="Enter contact person's name"
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
                                            placeholder="Enter phone number"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Address Line 1</h5></label>
                                    <input
                                        type="text"
                                        onChange={inputHandler}
                                        value={registerFormData.addressLine1}
                                        name="addressLine1"
                                        className="form-control"
                                        placeholder="Enter address line 1"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Address Line 2</h5></label>
                                    <input
                                        type="text"
                                        onChange={inputHandler}
                                        value={registerFormData.addressLine2}
                                        name="addressLine2"
                                        className="form-control"
                                        placeholder="Enter address line 2"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>City</h5></label>
                                    <input
                                        type="text"
                                        onChange={inputHandler}
                                        value={registerFormData.city}
                                        name="city"
                                        className="form-control"
                                        placeholder="Enter city"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>State</h5></label>
                                    <input
                                        type="text"
                                        onChange={inputHandler}
                                        value={registerFormData.state}
                                        name="state"
                                        className="form-control"
                                        placeholder="Enter state"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Zip Code</h5></label>
                                    <input
                                        type="text"
                                        onChange={inputHandler}
                                        value={registerFormData.zipCode}
                                        name="zipCode"
                                        className="form-control"
                                        placeholder="Enter zip code"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Country</h5></label>
                                    <input
                                        type="text"
                                        onChange={inputHandler}
                                        value={registerFormData.country}
                                        name="country"
                                        className="form-control"
                                        placeholder="Enter country"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label"><h5>Website</h5></label>
                                    <input
                                        type="url"
                                        onChange={inputHandler}
                                        value={registerFormData.website}
                                        name="website"
                                        className="form-control"
                                        placeholder="Enter website URL"
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

export default VendorRegister;
