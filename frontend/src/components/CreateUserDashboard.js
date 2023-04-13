import React from 'react'
import { useState } from 'react';
import { createUser } from '../services/UserService'

function CreateUserDashboard() {
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
        </div>
    </form>

    // <section class="bg-gray-50 dark:bg-gray-900">
    //     <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //         <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //             <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    //                 <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    //                     Create and account
    //                 </h1>
    //                 <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit} >
    //                     <div>
    //                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    //                         <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={handleChange} />
    //                     </div>
    //                     <div>
    //                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    //                         <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
    //                     </div>
    //                     <div>
    //                         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
    //                         <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange} />
    //                     </div>
    //                     <div class="flex items-start">
    //                         <div class="flex items-center h-5">
    //                             <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
    //                         </div>
    //                         <div class="ml-3 text-sm">
    //                             <label class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/">Terms and Conditions</a></label>
    //                         </div>
    //                     </div>
    //                     <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
    //                     <p class="text-sm font-light text-gray-500 dark:text-gray-400">
    //                         Already have an account? <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
    //                     </p>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // </section>
  )
}

export default CreateUserDashboard