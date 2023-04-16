import React, { useState } from 'react'
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

  const editFormParams = [
    {
      label: "Username",
      type: "text",
      placeholder: "Username",
      name: "username",
      defaultValue: user.username
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Email",
      name: "email",
      defaultValue: user.email
    },
    {
      label: "First Name",
      type: "text",
      placeholder: "First Name",
      name: "first_name",
      defaultValue: user.first_name
    },
    {
      label: "Middle Name",
      type: "text",
      placeholder: "Middle Name",
      name: "middle_name",
      defaultValue: user.middle_name
    },
    {
      label: "Last Name",
      type: "text",
      placeholder: "Last Name",
      name: "last_name",
      defaultValue: user.last_name
    },
    {
      label: "Gender",
      type: "text",
      placeholder: "Gender",
      name: "gender",
      defaultValue: user.gender
    },
    {
      label: "Mobile No.",
      type: "text",
      placeholder: "Mobile No.",
      name: "mobile_no",
      defaultValue: user.mobile_no
    },
    {
      label: "Role",
      type: "text",
      placeholder: "Role",
      name: "role",
      defaultValue: user.role
    },
  ]

  const [userData, setUserData] = useState(INITIAL_USER_DATA);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setUserData((prev) => {
          return { ...prev, [name]: value };
      })
      console.log(name, value)
  };

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
          <span className='!hover:text-red-600'>
              <button className="m-0 p-0 !hover:text-red-600" onClick={toggleModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="m-0 p-0 w-4 h-4 !hover:text-red-600">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                      <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                  </svg>            
              </button>
          </span>

          {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm backdrop-brightness-50 backdrop-contrast-50">
          {/* <div className="flex items-center justify-center min-h-screen"> */}
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-blue-50 dark:bg-slate-900 rounded-lg text-black">
              <div className="p-4">
                <h2 className="text-lg font-bold mb-4 text-white">Edit user information</h2>
                <form onSubmit={handleSubmit} className=''>
                  
                    {
                      editFormParams.map((field) => {
                        return (
                          <div className="mb-4 flex">
                            <div className="w-1/2"><label className="text-white mr-2">{field.label}</label></div>
                              <input className="grow rounded-md h-5"
                                type={field.type}
                                placeholder={field.placeholder}
                                name={field.name}
                                defaultValue={field.defaultValue}
                                onChange={handleChange} 
                                required
                              />
                          </div>
                        )
                      })
                    }
                    
                 
                  <div className="flex justify-between">
                    <button
                      className="bg-gray-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
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
  )
}

export default EditDashboard