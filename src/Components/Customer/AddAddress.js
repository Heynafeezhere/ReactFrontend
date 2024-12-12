import Sidebar from './Sidebar';
import { useState } from 'react';
import UserContext from '../../Context';
import { useContext } from 'react';
import axios from 'axios';
function AddAddress() {
    const userContext = useContext(UserContext);
    const baseUrl = "http://127.0.0.1:8000/api/";
    const [addressData, setAddressData] = useState({
        address_line1: '',
        address_line2: '',
        city: '',
        state: '',
        zip_code: '',
        country: '',
    });

    if (!userContext.customerId) {
        window.location.href = '/customer/login';
    }

    const inputHandler = (event) => {
        setAddressData({
            ...addressData,
            [event.target.name]: event.target.value
        });
    }
    
    const submitHandler = () => {
        const submitFormData = new FormData();
        submitFormData.append('address_line1', addressData.address_line1);
        submitFormData.append('address_line2', addressData.address_line2);
        submitFormData.append('city', addressData.city);
        submitFormData.append('state', addressData.state);
        submitFormData.append('zip_code', addressData.zip_code);
        submitFormData.append('country', addressData.country);
        submitFormData.append('customer_id', userContext.customerId);

        axios.post(`${baseUrl}addresses/`, submitFormData).then((response) => {
            alert('Address Added Successfully!')
            window.location.href = '/customer/addresses';
        }).catch((error) => {
            alert('Something went wrong!', error)
            console.log(error);
        });
    }

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
                                    <label htmlFor="address_line1" className="form-label">Address Line 1*</label>
                                    <input type="text" className="form-control" onChange={inputHandler} id="address_line1" name="address_line1" maxLength="255" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address_line2" className="form-label">Address Line 2</label>
                                    <input type="text" className="form-control" onChange={inputHandler} id="address_line2" name="address_line2" maxLength="255"/>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="city" className="form-label">City*</label>
                                        <input type="text" className="form-control" onChange={inputHandler} id="city" name="city" maxLength="100" required/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="state" className="form-label">State*</label>
                                        <input type="text" className="form-control" onChange={inputHandler} id="state" name="state" maxLength="100" required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="zip_code" className="form-label">Zip Code*</label>
                                        <input type="text" className="form-control" onChange={inputHandler} id="zip_code" name="zip_code" maxLength="10" required/>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="country" className="form-label">Country*</label>
                                        <input type="text" className="form-control" onChange={inputHandler} id="country" name="country" maxLength="100" required/>
                                    </div>
                                </div>
                                <button type="button" onClick={submitHandler} className="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddAddress;