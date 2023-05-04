import React from 'react'
import { useNavigate } from 'react-router-dom'

import { isAuthorize, isAdmin_ } from '../App'
import { pagesNavigations } from '../data/pagesLinks'
import { FaHome } from '../assets/icons/icons'

function Navbar({ setIsAuthorized, setIsAdmin }) {
    // console.log('Is it admin ==> ', isAdmin_)

    const navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.removeItem('jwt')
        localStorage.removeItem('data')
        setIsAuthorized(false)
        setIsAdmin(false)
        navigate('/login')
    }

    let username = ''

    return (
        <div>
            <nav className="w-full top-1 bg-white">
                <div className="flex items-center w-full bg-white h-15 top-0">
                    <div className="flex justify-start items-center pt-1.5 w-3/4 pl-2">
                        <button type="button" onClick={() => navigate('/')}>
                            {' '}
                            <img
                                className="h-12  mt-0.75"
                                src={require('../assets/img/e_refill_logo.webp')}
                                alt="logo"
                            />{' '}
                        </button>
                    </div>
                    {isAuthorize ? (
                        <div className="flex justify-end align-bottom w-1/4 gap-4 mr-2 my-2 h-12">
                            <div className="flex items-center justify-center font-medium w-1/2">
                                Hi,{' '}
                                <span className="hidden">
                                    {
                                        (username = JSON.parse(
                                            localStorage.getItem('data')
                                        ).username
                                            ? (username = JSON.parse(
                                                  localStorage.getItem('data')
                                              ).username)
                                            : '')
                                    }
                                </span>
                                {username.charAt(0).toUpperCase() +
                                    username.slice(1)}
                            </div>
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="text-white bg-orange-600 hover:bg-orange-600 font-medium text-base dark:bg-slate-900 dark:hover:bg-slate-800 w-1/2"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex justify-end align-bottom w-1/4 gap-4 mr-2 my-2 h-12">
                            <button
                                type="button"
                                onClick={() => navigate('/register')}
                                className="text-white bg-orange-600 hover:bg-slate-900 font-medium text-base dark:bg-orange-500 dark:hover:bg-orange-900 w-1/2"
                            >
                                Register
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/login')}
                                className="text-white bg-orange-600 hover:bg-orange-600 font-medium text-base dark:bg-slate-900 dark:hover:bg-slate-800 w-1/2"
                            >
                                Login
                            </button>
                        </div>
                    )}
                </div>

                {isAuthorize && isAdmin_ ? (
                    <></>
                ) : (
                    <div className="p-5 flex items-center justify-center z-10 dark:bg-slate-900 h-12 w-full">
                        <button onClick={() => navigate('/')}>
                            <FaHome className="text-white hover:!text-orange-600 mr-10 !h-[50px]" />
                        </button>

                        <ul className="hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 text-sm capitalize font-medium">
                            {pagesNavigations.map(({ id, link, path }) => (
                                <li key={id} className="hover:text-orange-500">
                                    <button
                                        className="!tracking-wide"
                                        onClick={() => navigate(path)}
                                    >
                                        {' '}
                                        {link}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <img
                            id="moon"
                            src={require('../assets/img/moon.webp')}
                            className="hidden md:block w-5 cursor-pointer ml-10"
                            alt="Dark Mood"
                        />
                        <div
                            id="hamburger"
                            className="space-y-1 md:hidden cursor-pointer z-20 text-white"
                        >
                            <div className="w-6 h-0.5 bg-white"></div>
                            <div className="w-6 h-0.5 bg-white"></div>
                            <div className="w-6 h-0.5 bg-white"></div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar
