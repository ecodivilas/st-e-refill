import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { createUser } from '../services/UserService'
import { registerFields } from '../data/registerFields'

function Register() {
    const navigate = useNavigate()

    const [user_details, setUserDetails] = useState({
        username: '',
        email: '',
        password: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        age: '',
        gender: '',
        mobile_number: '',
        role: 'customer',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserDetails((prev) => {
            return { ...prev, [name]: value }
        })
        console.log(name, value)
    }

    const checkPassword = () => {
        if (user_details.confirm_password === user_details.password) {
            return true
        } else {
            return false
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (checkPassword()) {
            createUser(user_details).then(console.log(user_details))
            navigate('/')
        } else {
            alert('Password Mismatched!')
        }
    }


    return (
        <div>
            <div
                className="flex justify-left items-center background"
                style={{
                    backgroundImage: `url(${require('../assets/img/watery.webp')})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '100vh',
                }}
            >
                <section className="w-[60vw] h-[100vh] flex justify-start z-10 ml-8">
                    <div className="flex flex-col items-center justify-start px-6 mx-auto md:h-screen lg:py-0">
                        <div className="w-full g-white !mt-8 rounded-lg shadow dark:border h-[90vh] md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 h-[90vh] space-y-6 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Register
                                </h1>
                                {/* <form className="grid grid-cols-4 h-[55vh]" action="#"> */}
                                <form className="" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-2 gap-4">
                                        {registerFields.map((item) => (
                                            <div key={item.id} className="h-16">
                                                <label className="text-xs font-medium text-gray-900 dark:text-white w-32">
                                                    {item.label}
                                                </label>
                                                {item.id === 'gender' ? (
                                                    <select name="gender" className="px-2 mt-2 h-8 bg-gray-50 border border-gray-300 text-gray-900 sm:text-xs rounded-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-72">
                                                        <option value=""></option>
                                                        <option value="M">Male</option>
                                                        <option value="F">Female</option>
                                                        <option value="U">Rahul</option>
                                                    </select>
                                                ) : (

                                                <input
                                                    type={item.type}
                                                    name={item.name}
                                                    placeholder={
                                                        item.placeholder
                                                    }
                                                    onChange={handleChange}
                                                    className="px-2 mt-2 h-8 bg-gray-50 border border-gray-300 text-gray-900 sm:text-xs rounded-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-72"
                                                    required
                                                />
                                                
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center h-16 grow mt-8">
                                        <button
                                            type="submit"
                                            className="grow rounded-sm text-white bg-primary-600 hover:bg-primary-700 font-medium text-sm px-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 h-10"
                                        >
                                            Register Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Register
