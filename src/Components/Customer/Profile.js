import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import UserContext from '../../Context';
import { useContext } from 'react';
import axios from 'axios';

function Profile() {
    const [profileData, setProfileData] = useState({});
    const [updatedProfileData, setUpdatedProfileData] = useState({});
    const userContext = useContext(UserContext);
    const baseUrl = "http://127.0.0.1:8000/api/";

    useEffect(() => {
        // Fetch user data based on customerId from context
        if (userContext.customerId) {
            fetchProfileData();
        }
    }, [userContext.customerId]); // Refetch data when customerId changes

    const fetchProfileData = () => {
        fetch(`${baseUrl}customer/${userContext.customerId}/`)
            .then((response) => response.json())
            .then((data) => {
                setProfileData(data);
                setUpdatedProfileData(data);
            });
    };

    function updateProfileHandler(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Update the user profile
        const updatedUser = new FormData();
        updatedUser.append('first_name', updatedProfileData.user.first_name);
        updatedUser.append('last_name', updatedProfileData.user.last_name);
        updatedUser.append('username', updatedProfileData.user.username);
        updatedUser.append('email', updatedProfileData.user.email);

        axios.put(`${baseUrl}user/${userContext.customerId}/`, updatedUser, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log('Customer profile updated successfully:', response.data);
                // Reload the profile data after successful update
                fetchProfileData();
            })
            .catch((error) => {
                console.error('Error updating customer profile:', error);
            });

        // Update the customer profile data
        const updatedData = new FormData();
        updatedData.append('phone', updatedProfileData.phone);
        if (updatedProfileData.profile_image) {
            updatedData.append('profile_image', updatedProfileData.profile_image);
        }

        axios.put(`${baseUrl}customer/${userContext.customerId}/`, updatedData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                alert('Profile updated successfully');
                console.log('Customer profile updated successfully:', response.data);
                // Reload the profile data after successful update
                fetchProfileData();
            })
            .catch((error) => {
                alert('Error updating profile');
                console.error('Error updating customer profile:', error);
            });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setUpdatedProfileData((prevData) => ({ ...prevData, profile_image: file }));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedProfileData((prevData) => {
            if (name === 'firstName') {
                return { ...prevData, user: { ...prevData.user, first_name: value } };
            } else if (name === 'lastName') {
                return { ...prevData, user: { ...prevData.user, last_name: value } };
            } else if (name === 'userName') {
                return { ...prevData, user: { ...prevData.user, username: value } };
            } else if (name === 'email') {
                return { ...prevData, user: { ...prevData.user, email: value } };
            } else if (name === 'phone') {
                return { ...prevData, phone: value };
            } else {
                return prevData;
            }
        });
    };

    return (
        <section className="container mt-4">
            <div className="row mt-3">
                <div className="col-md-3 col-12 mb-2">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="card">
                        <div className="card-header">
                            <h4>Update Customer Profile</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updateProfileHandler}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">
                                        <h5>First Name</h5>
                                    </label>
                                    <input
                                        type="text"
                                        value={updatedProfileData?.user?.first_name || ''}
                                        onChange={handleInputChange}
                                        name="firstName"
                                        className="form-control"
                                        id="firstName"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">
                                        <h5>Last Name</h5>
                                    </label>
                                    <input
                                        type="text"
                                        value={updatedProfileData?.user?.last_name || ''}
                                        onChange={handleInputChange}
                                        name="lastName"
                                        className="form-control"
                                        id="lastName"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userName" className="form-label">
                                        <h5>Username</h5>
                                    </label>
                                    <input
                                        type="text"
                                        value={updatedProfileData?.user?.username || ''}
                                        onChange={handleInputChange}
                                        name="userName"
                                        className="form-control"
                                        id="userName"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        <h5>Email</h5>
                                    </label>
                                    <input
                                        type="email"
                                        value={updatedProfileData?.user?.email || ''}
                                        onChange={handleInputChange}
                                        name="email"
                                        className="form-control"
                                        id="email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">
                                        <h5>Phone</h5>
                                    </label>
                                    <input
                                        type="phone"
                                        value={updatedProfileData?.phone || ''}
                                        onChange={handleInputChange}
                                        name="phone"
                                        className="form-control"
                                        id="phone"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="profile_image" className="form-label">
                                        <p>
                                            <img
                                                src={profileData?.profile_image || 'https://via.placeholder.com/150'}
                                                alt="Profile Image"
                                                style={{ width: '150px', height: '150px' }}
                                            />
                                        </p>
                                        <h5>Upload Profile Picture</h5>
                                    </label>
                                    <input type="file" onChange={handleFileChange} name="profile_image" className="form-control" id="profile_image" accept="image/*" />
                                </div>
                                <div className="mt-5">
                                    <button type="submit"
                                        disabled={!updatedProfileData?.user?.first_name || !updatedProfileData?.user?.last_name || !updatedProfileData?.user?.username || !updatedProfileData?.user?.email || !updatedProfileData?.phone}
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
