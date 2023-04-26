import React from 'react'

import { registerFields } from '../../data/registerFields'

function PersonalDataForm({ defaultUserValues, handleUserChange }) {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-2 gap-4">
                {registerFields.map((item) => (
                    <div key={item.id} className="h-16">
                        <label className="text-xs font-medium text-gray-900 dark:text-white w-32">
                            {item.label}
                        </label>
                        {item.id === 'gender' ? (
                            <select name="gender" defaultValue={defaultUserValues[item.name]} onChange={handleUserChange} className="px-2 mt-2 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                                <option value=""></option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                        ) : (
                        <input
                            type={item.type}
                            name={item.name}
                            defaultValue={defaultUserValues[item.name]}
                            placeholder={
                                item.placeholder
                            }
                            onChange={handleUserChange}
                            className="px-2 mt-2 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block !w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                        )}
                    </div>
                ))}              
                </div>
        </div>
    )
}

export default PersonalDataForm
