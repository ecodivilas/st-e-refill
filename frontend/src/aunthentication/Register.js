import React from 'react'
import { registerFields } from '../data/registerFields'

function Register() {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-teal-900 pt-16">
        <div className="flex flex-col items-center justify-start px-6 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border w-[90vw] h-[70vh] dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Register
                    </h1>
                    {/* <form className="grid grid-cols-4 h-[55vh]" action="#"> */}
                    <form className="grid grid-cols-2" action="#">
                        
                        {registerFields.map(({ id, name, label, type, placeholder }) => (
                        <div className="">
                                <label className="text-sm font-medium text-gray-900 dark:text-white w-32">{label}</label>
                                <input id={id} type={type} name={name} placeholder={placeholder} className="mt-1.5 h-8 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-72" required />
                            </div>
                        ))} 

                        <div className="flex items-center h-5">
                            <button type="submit" className="w-32 text-white bg-primary-600 hover:bg-primary-700 font-medium text-sm px-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 h-10">Register Now</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Register