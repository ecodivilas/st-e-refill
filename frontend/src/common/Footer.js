import React from 'react'

function Footer() {
    return (
        <div className="w-full bg-gray-900">
            <div className="container mx-auto py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* <img className="w-8" src="./img/logo.png" alt="" /> */}
                </div>
                <span className="hidden md:block font-medium text-white">
                    © 2023 E-Refill
                </span>
                <div className="flex gap-2">
                    <img
                        className="w-4 cursor-pointer"
                        src={require('../assets/img/facebook.png')}
                        alt="fb"
                    />
                    <img
                        className="w-4 cursor-pointer"
                        src={require('../assets/img/instagram.png')}
                        alt="insta"
                    />
                    <img
                        className="w-4 cursor-pointer"
                        src={require('../assets/img/twitter.png')}
                        alt="twitter"
                    />
                    <img
                        className="w-4 cursor-pointer"
                        src={require('../assets/img/linkedin.png')}
                        alt="linkedin"
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer
