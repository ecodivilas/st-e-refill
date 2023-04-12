import React, { useState } from 'react';

import { editUser } from '../services/UserService';

const EditDashboard = ({ user }) => {
  const INITIAL_USER_DATA = {
    id: user.id ?? '',
    username: user.username ?? '',
    password: user.password ?? '',
    first_name: user.first_name ?? '',
    last_name: user.last_name ?? '',
    gender: user.gender ?? '',
    age: user.age ?? '',
    delivery_address: user.delivery_address ?? '',
    phone: user.phone ?? '',
    email: user.email ?? '',
    role: user.role ?? '',
  }

  const [userData, setUserData] = useState(INITIAL_USER_DATA);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData((prev) => {
          return { ...prev, [name]: value };
      })
      console.log(name, value)
  };

  // const handleChangePhoneNumber = (e) => {
  //   const { value } = e.target;
  //   const regExPattern = "/A[]/g"

  //   if (regExPattern.pattern(value)) {
  //     handle values or add regex
  //     return
  //   }

  //   handleChange()
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(userData)
    .then(() => {
      console.log(userData)
      toggleModal();
    })
    .catch((error) => {
        console.error('Unable to updated record: ', error.message)
    })
  };

  const toggleModal = (e) => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <div className="flex justify-center items-center py-4 mx-4 w-50">
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
          {/* <div className="flex items-center justify-center min-h-screen"> */}
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-blue-50 dark:bg-slate-900 rounded-lg text-black">
              <div className="p-4">
                <h2 className="text-lg font-bold mb-4 text-white">Edit user information</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      defaultValue={user.username}
                      onChange={handleChange} 
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="password"
                      placeholder="Password"
                      defaultValue={user.password}
                      onChange={handleChange} 
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      defaultValue={user.first_name}
                      onChange={handleChange} 
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      defaultValue={user.last_name}
                      onChange={handleChange} 
                      required
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
                      placeholder="Mobile Number"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default EditDashboard;