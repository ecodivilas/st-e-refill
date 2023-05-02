import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PersonalDataForm from '../../components/registration/PersonalDataForm'
import DeliveryAddressForm from '../../components/registration/DeliveryAddressForm'
import { registerUser } from '../../services/UserService'

let defaultUserValues = {
    username: '',
    email: '',
    password: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    age: '',
    gender: '',
    mobile_number: '',
    role_id: 1,
}

let defaultAddressValues = {
    address: '',
    baranggay: '',
    city: '',
    country: '',
    tin: '',
    description: ''
}

function Register() {
    // Toggle
    const [isToggle, setToggle] = useState(false)
    const navigate = useNavigate()

    const [user_details, setUserDetails] = useState(defaultUserValues)
    const [address_details, setAddressDetails] = useState(defaultAddressValues)

    defaultUserValues = user_details
    defaultAddressValues = address_details

    const handleUserChange = (e) => {
        const { name, value } = e.target
        setUserDetails((prev) => {
            return { ...prev, [name]: value }
        })
        console.log(name, value)
    }

    const handleAddressChange = (e) => {
        const { name, value } = e.target
        setAddressDetails((prev) => {
            return { ...prev, [name]: value }
        })
        console.log(name, value)
    }

    const isPassed = () => {
        if (user_details.confirm_password === user_details.password
            && user_details.password !== ""
            && user_details.username.trim() !== ""
            && user_details.email.trim() !== ""
            // && user_details.password.trim() !== ""
            // && user_details.first_name.trim() !== ""
            // && user_details.last_name.trim() !== ""
            // && user_details.age.trim() !== ""
            // && user_details.gender.trim() !== ""
            // && user_details.mobile_number.trim() !== ""
            // && user_details.gender.trim() !== ""
            // && user_details.address.trim() !== ""
            // && user_details.baranggay.trim() !== ""
            // && user_details.city.trim() !== ""
            // && user_details.country.trim() !== ""
            ) 
        {
            return true
        }   
        else {
            return false
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isPassed()) {
            try {
               registerUser(defaultUserValues, defaultAddressValues)
               .then((res)=>{
                        alert('Registered Successfully', res)
                    })
                .catch((error) => alert(error))
                
            } catch (error) {
                console.log("Don't Went Through")
            }
            navigate('/', { state: user_details })
        } else {
            setToggle(prev =>!prev)
            console.log("User Data: ", defaultUserValues)
            console.log("Address Data: ", defaultAddressValues)
            alert('Password Mismatched! / Some Fields are empty')
        }
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
        }} >
            <section className="!w-[60vw] h-[100vh] flex justify-start z-10 ml-8">
                <div className="flex flex-col items-center justify-start px-6 mx-auto md:h-screen lg:py-0">
                    <div className="!w-full g-white !mt-8 rounded-lg shadow dark:border h-[90vh] md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 h-[90vh] space-y-6 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register
                            </h1>
                            <form className="" onSubmit={handleSubmit}>
                                    <div>
                                {isToggle ? 
                                    <div>
                                        <DeliveryAddressForm defaultAddressValues={defaultAddressValues} handleAddressChange={handleAddressChange} />
                                    </div>
                                   : 
                                   <PersonalDataForm defaultUserValues={defaultUserValues} handleUserChange={handleUserChange}/>
                                    }
                                
                                {isToggle ? ( 
                                     <>
                                        <div className="pt-6 flex items-end text-white text-xs font-small">Address will be your delivery address for your orders.</div>
                                        <div className="flex items-end h-16 grow mt-2">
                                            <button type="submit" className="grow rounded-sm text-white bg-primary-600 hover:bg-primary-700 font-medium text-sm px-2 text-center dark:bg-green-600 dark:hover:bg-green-700 h-10"
                                    >
                                        Register Now
                                            </button> 
                                        </div>
                                     </>
                                ) : (<></>)}

                                    <div className="flex items-center h-16 grow mt-2">
                                        <button
                                            // type="submit"
                                            type="button"
                                            onClick={() => setToggle(prev =>!prev)}
                                            className="grow rounded-sm text-white bg-primary-600 hover:bg-primary-700 font-medium text-sm px-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 h-10"
                                        >
                                            {
                                                isToggle ? "Previous" : "Next"
                                            }
                                        </button>
                                    </div>
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
