import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/UserService'
import { LockSVGIcon, UserSVGIcon } from '../../assets/icons/svgs/svgs'
import '../../App'

function Login({ setIsAuthorized, setIsAdmin }) {
    const [userData, setUserData] = useState({ username: '', password: '' })
    const navigate = useNavigate()
    sessionStorage.setItem('navigationOut', false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        loginUser(userData)
            .then((res) => {
                if (JSON.stringify(res) !== '{}' && res !== undefined) {
                    if (res[1].role_id !== 1) {
                        alert('Not a customer account')
                        navigate('/login')
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
                return true
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <div
                className="flex justify-left items-center background"
                style={{
                    backgroundImage: `url(${require('../../assets/img/watery.webp')})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '100vh',
                }}
            >
                <div className="w-[60vw] flex justify-start z-10 ml-6">
                    <div className="w-[35vw] flex flex-cols items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-[35vw] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
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

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    aria-describedby="remember"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label className="text-gray-500 dark:text-gray-300">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => navigate('/')}
                                            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-orange-500"
                                        >
                                            Forgot password?
                                        </button>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                                    >
                                        Login
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet?{' '}
                                        <button
                                            onClick={() =>
                                                navigate('/register')
                                            }
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-orange-500"
                                        >
                                            Register
                                        </button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
