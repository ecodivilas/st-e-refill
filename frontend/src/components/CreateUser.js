import React from 'react'
import { useState } from 'react';
import { createUser } from '../services/UserService'

function CreateUser() {

    const [user_details, setUserDetails] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        gender: '',
        age: '',
        delivery_address: '',
        phone: '',
        email: '',
        role: '',
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
        // console.log(user_details);
        createUser(user_details).then((console.log(user_details)));
    }

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-60 mb-5" onSubmit={handleSubmit}>
        <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="username" id="username" type="text" placeholder="Username" onChange={handleChange} />
        </div>
        {/* <div class="mb-4">
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div> */}
        <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="password" id="password" type="text" placeholder="Password" onChange={handleChange} />
        </div>
        <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="first_name" id="first_name" type="text" placeholder="First Name" onChange={handleChange} />
        </div>
        <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="last_name" id="last_name" type="text" placeholder="Last Name" onChange={handleChange} />
        </div>
        <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="gender" id="gender" type="text" placeholder="Gender" onChange={handleChange} />
        </div>
        <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="age" id="age" type="text" placeholder="Age" onChange={handleChange} />
        </div>
        <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="delivery_address" id="delivery_address" type="text" placeholder="Delivery Address" onChange={handleChange} />
        </div>
        <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="phone" id="phone" type="text" placeholder="Phone No." onChange={handleChange} />
        </div>
        <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="text" placeholder="Email" onChange={handleChange} />
        </div>
        <div className="mb-4">
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="role" id="role" type="text" placeholder="Role" onChange={handleChange} />
        </div>
        <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Create
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Update
        </button>
        </div>
    </form>
  )
}

export default CreateUser