import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App'

function Splash({ isAuthorized }) {
    const navigate = useNavigate()

    return (
        <>
            <div
                className="flex justify-left items-center background"
                style={{
                    backgroundImage: `url(${require('../assets/img/watery.webp')})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '100vh',
                }}
            >
                <div className="flex justify-center group relative py-4 px-2">
                    <div className="mt-32">
                        <Link
                            to="/"
                            className=""
                            data-tooltip-target="tooltip-hover"
                        >
                            <img
                                className="h-4/6 ml-6 z-10 translate-x-6 hover:translate-x-full duration-150"
                                src={require('../assets/img/robots.webp')}
                                alt="robot"
                            />
                        </Link>
                        <span className="absolute top-10 left-1/2 transform -translate-x-4/8 scale-0 rounded bg-gray-300 p-2 text-lg text-black group-hover:scale-100">
                            Need help? Chat with us
                        </span>
                    </div>
                </div>

                <div className="flex flex-col justify-end items-center w-5/12 h-28 gap-3">
                    <button
                        type="button"
                        onClick={() => {
                            isAuthorized
                                ? navigate('/order')
                                : navigate('/login')
                        }}
                        className="text-white bg-slate-900 hover:bg-orange-500 focus:ring-4 focus:bg-slate-500 font-medium text-lg h-14 !w-40"
                    >
                        Order Now
                    </button>
                    {isAuthorized ? (
                        <div></div>
                    ) : (
                        <div className="flex justify-center text-lg">
                            <p>
                                Not a Member Yet?{' '}
                                <button
                                    className="text-orange-600 font-medium text-lg"
                                    onClick={() => navigate('/register')}
                                >
                                    Create an Account
                                </button>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Splash
