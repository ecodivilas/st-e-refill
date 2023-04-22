import React from 'react'
// import { Navigate, useLocation } from 'react-router-dom';
// import { createUser } from '../services/UserService'
import { deliveryAddressFields } from '../../data/deliveryAddressFields'

function DeliveryAddressForm({ defaultAddressValues, handleAddressChange }) {
    
    // useLocationPassingData
    // const { state } = useLocation(xasxasdwqeq);
    // const { user_details } = state || "hERO KO";

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(state)

        // if (checkPassword()) {
        //     createUser(user_details).then(console.log(user_details))
        //     navigate('/')
        // } else {
        //     alert('Password Mismatched!')
        // }
    // }

  return (
    <div>
        <div>
        {/* <div className="text-lg font-medium text-gray-900 dark:text-white w-32">Delivery Address: </div> */}
            <div className="grid grid-cols-2 gap-4">
                {deliveryAddressFields.map((item) => (
                    <div key={item.id} className="h-16 flex-col basis-[11.4rem]">
                        <label className="text-xs font-medium text-gray-900 dark:text-white w-32">
                            {item.label}
                        </label>
                        {item.id === 'address' || item.id === 'description' ? (
                            <div className='!mb-32 !h-20'>
                                <textarea id={item.id} name={item.name} rows={item.rows}
                                 defaultValue={defaultAddressValues[item.id]} onChange={handleAddressChange}
                                    cols={item.cols} placeholder={item.placeholder}
                                    className="px-2 mt-2 h-20 bg-gray-50 border border-gray-300 text-gray-900 sm:text-xs rounded-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-72"
                                    >
                                </textarea>
                            </div>
                        ) : (
                        <input
                            type={item.type}
                            name={item.name}
                            defaultValue={defaultAddressValues[item.name]}
                            placeholder={
                                item.placeholder
                            }
                            onChange={handleAddressChange}
                            className="px-2 mt-2 h-8 bg-gray-50 border border-gray-300 text-gray-900 sm:text-xs rounded-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-72"
                            required
                        />
                        )}
                    </div>
                ))}
            </div>                  
        </div>
    </div>
  )
}

export default DeliveryAddressForm