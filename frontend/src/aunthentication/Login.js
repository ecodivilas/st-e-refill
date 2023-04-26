import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/UserService'

function Login() {
  const navigate = useNavigate()

  const INITIAL_USER_DATA = {username: "", password: ""}

  const [userData, setUserData] = useState(INITIAL_USER_DATA)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => {
        return { ...prev, [name]: value }
    })
    console.log(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            loginUser(userData).then((res)=>{
                console.log(res)
                if (JSON.stringify(res) !== '{}') {

                    // Assigning Default Values Upon Login
                    sessionStorage.setItem("jwt", res[0].jwt)
                    localStorage.setItem("data", JSON.stringify(res[1]))

                    const data = localStorage.getItem("data")
                    if (data){
                        console.log("Fetch Data: ", JSON.parse(data))
                    }
                    alert('Login Successfully! Noice Hahahah')
                    navigate('/', { state: res })
                    window.location.reload(false)
                }
                else {
                    console.log("User/Password does not exist!")
                    alert('User/Password doesn\'t exist!')
                }
            })
            
        } catch (error) {
            console.log("Error: ", error)
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
        <section className="w-[60vw] flex justify-start z-10 ml-6">
            <div className="w-[35vw] flex flex-cols items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-[35vw] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div className="flex">
                                <div className="flex justify-center items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-l-lg w-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline text-slate-700 fill-current">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                <input type="text" name="username" id="username" placeholder="username" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-r-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                            </div>

                            <div className="flex">
                                <div className="flex justify-center items-center bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-l-lg w-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline text-slate-700 fill-current w-5 h-5">
                                        <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                    <input type="password" name="password" id="password" placeholder="••••••••" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-r-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                                </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                    <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-orange-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Login</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <button onClick={() => navigate('/register')} className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-orange-500">Register</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </div>
  )
}

export default Login