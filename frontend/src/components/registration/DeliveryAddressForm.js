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
    <div className='w-full'>
        <div className='w-full'>
            <div className="grid grid-cols-2 gap-4 h-32">
                {deliveryAddressFields.map((item) => {
                       return (
                        item.id === 'address' || item.id === 'description' ? (
                            <div key={item.id} className="h-16">
                                <label className="text-xs font-medium text-gray-900 dark:text-white w-32">
                                    {item.label}
                                </label>
                                <div>
                                    <textarea id={item.id} name={item.name} rows={item.rows} maxLength="200"
                                    defaultValue={defaultAddressValues[item.id]} onChange={handleAddressChange}
                                    cols={item.cols} placeholder={item.placeholder}
                                    className="resize-none p-2 mt-2 h-28 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    >
                                    </textarea>
                                    </div>
                            </div>
                            ) : (
                                <></>
                                )
                            )
                        }
                    )}
            </div>       
            <div className="mt-8 w-full">
                <div className="grid grid-cols-2 gap-4 w-full">
                    {deliveryAddressFields.map((item) => {
                        return (
                                item.id !== 'address' && item.id !== 'description' && item.id !== 'tin' ? ( 
                                    <div className='w-full' key={item.id} >
                                            <label className="text-xs font-medium text-gray-900 dark:text-white w-32">
                                                {item.label}
                                            </label>

                                            <select name={item.name} defaultValue={defaultAddressValues[item.name]} onChange={handleAddressChange} className="px-2 mt-2 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block !w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                                            <option value=""></option>
                                            {item.values.map((value) => {
                                                return (
                                                        <option value={value.value} className="text-sm">{value.value}</option>
                                                )
                                            })}
                                            </select>           
                                        </div>

                                ) : (
                                    <>
                                    { 
                                    item.id === 'tin' ? (
                                        <div className='w-full'>
                                            <label className="text-xs font-medium text-gray-900 dark:text-white w-32">
                                                {item.label}
                                            </label>
                                            <input
                                                type={item.type}
                                                name={item.name}
                                                defaultValue={defaultAddressValues[item.name]}
                                                placeholder={
                                                    item.placeholder
                                                }
                                                onChange={handleAddressChange}
                                                className="px-2 mt-2 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block !w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                                required='true'
                                            />
                                        </div>
                                        ) : (
                                            <></>
                                        )
                                    }
                                    </>
                            )
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeliveryAddressForm