import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/UserService'
import { LockSVGIcon, UserSVGIcon } from '../../assets/icons/svgs/svgs'

function Login({ setIsAdmin, setIsAuthorized, setIsNavigationOut }) {
    const [adminData, setAdminData] = useState({ username: '', password: '' })
    const navigate = useNavigate()
    sessionStorage.setItem('navigationOut', true)
    setIsNavigationOut(true)

    const handleChange = (e) => {
        const { name, value } = e.target
        setAdminData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            loginUser(adminData).then((res) => {
                if (JSON.stringify(res) !== '{}' && res !== undefined) {
                    if (res[1].role_id !== 2) {
                        alert('Not an admin account')
                        navigate('/admin')
                    } else {
                        // Assigning default values upon login
                        sessionStorage.setItem('jwt', res[0].jwt)
                        sessionStorage.setItem('userRole', res[0].userRole)
                        localStorage.setItem('data', JSON.stringify(res[1]))

                        sessionStorage.getItem('userRole') === '2'
                            ? setIsAdmin(true)
                            : setIsAdmin(false)
                        setIsAuthorized(true)

                        alert('Login Successfully!')
                        navigate('/')
                    }
                } else {
                    alert("User/Password doesn't exist!")
                }
            })
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    return (
        <>
            <div className="fixed top-0  w-screen h-screen -z-10 bg-slate-600"></div>
            <div className="w-full flex justify-center z-10">
                <div className="w-full flex flex-cols items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mr-20">
                    <div className="w-[380px] z-10 bg-white h-[380px] mb-27 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <form
                                className="space-y-4 md:space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div className="flex">
                                    <div className="flex justify-center items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-l-lg w-12">
                                        {UserSVGIcon}
                                    </div>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="username"
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-r-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>

                                <div className="flex">
                                    <div className="flex justify-center items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-l-lg w-12">
                                        {LockSVGIcon}
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-r-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
