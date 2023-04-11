import React, { Fragment, useState } from 'react';
import { editUser } from '../services/UserService';

const EditDashboard = ({ user }) => {

  const [user_details, setUserDetails] = useState({
    id: user?.id || '',
    username: user?.username || '',
    password: user?.password || '',
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    gender: user?.gender || '',
    age: user?.age || '',
    delivery_address: user?.delivery_address || '',
    phone: user?.phone || '',
    email: user?.email || '',
    role: user?.role || '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
        return { ...prev, [name]: value };
    })
    console.log(name, value)
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Came from User Service
    editUser(user_details).then((console.log(user_details)));
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = (e) => {
    setShowModal(!showModal);
  };

  return (
    <Fragment>
      {/* Button to open the modal */}
      <div className="flex justify-center items-center py-4 mx-10">
        <button
          className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={toggleModal}
        >
          Edit
        </button>
      </div>

      {/* Modal code */}
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg">
              <div className="p-4">
                <h2 className="text-lg font-bold mb-4">Edit user information</h2>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    defaultValue={user.username}
                    onChange={handleChange} 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="password"
                    placeholder="Password"
                    defaultValue={user.password}
                    onChange={handleChange} 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    defaultValue={user.first_name}
                    onChange={handleChange} 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    defaultValue={user.last_name}
                    onChange={handleChange} 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    defaultValue={user.gender}
                    onChange={handleChange} 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    defaultValue={user.age}
                    onChange={handleChange} 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="delivery_address"
                    placeholder="Delivery Address"
                    defaultValue={user.delivery_address}
                    onChange={handleChange} 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    defaultValue={user.phone}
                    onChange={handleChange} 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    defaultValue={user.email}
                    onChange={handleChange} 
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    defaultValue={user.role}
                    onChange={handleChange} 
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    className="bg-gray-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(e) => {
                      handleSubmit(e);
                      toggleModal();
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default EditDashboard;