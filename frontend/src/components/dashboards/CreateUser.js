import React, { useState } from 'react'

import { createUser } from '../../services/UserService'

function CreateUser() {
    const [user_details, setUserDetails] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        gender: '',
        age: '',
        delivery_address: '',
        phone_number: '',
        email: '',
        role: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserDetails((prev) => {
            return { ...prev, [name]: value }
        })
        console.log(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(user_details);
        createUser(user_details).then(console.log(user_details))
    }

    return (
        <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-60 mb-5"
            onSubmit={handleSubmit}
        >
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="username"
                    id="username"
                    type="text"
                    placeholder="Username"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="password"
                    id="password"
                    type="text"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="first_name"
                    id="first_name"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="last_name"
                    id="last_name"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="gender"
                    id="gender"
                    type="text"
                    placeholder="Gender"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="age"
                    id="age"
                    type="text"
                    placeholder="Age"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="delivery_address"
                    id="delivery_address"
                    type="text"
                    placeholder="Delivery Address"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder="Phone No."
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    id="email"
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="role"
                    id="role"
                    type="text"
                    placeholder="Role"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Create
                </button>
            </div>
        </form>
    )
}

export default CreateUser
