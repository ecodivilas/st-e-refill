import React, { useState } from 'react'

import { editUser } from '../../../services/UserService'
import { EditSVGIcon } from '../../../assets/icons/svgs/svgs'
import { editFormParams } from '../../../data/adminUsersEditData'

const EditUser = ({ user, setAlertEditedMessage }) => {
    const INITIAL_USER_DATA = {
        user_id: user.user_id ?? '',
        username: user.username ?? '',
        password: user.password ?? '',
        first_name: user.first_name ?? '',
        last_name: user.last_name ?? '',
        gender: user.gender ?? '',
        age: user.age ?? '',
        delivery_address: user.delivery_address ?? '',
        phone_number: user.phone ?? '',
        email: user.email ?? '',
        role: user.role_id ?? '',
    }

    const [userData, setUserData] = useState(INITIAL_USER_DATA)
    const [showModal, setShowModal] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editUser(userData)
            .then(() => {
                setAlertEditedMessage(
                    `Successfully edited user: ${user.username}`
                )
                toggleModal()
            })
            .catch((error) => {
                console.error('Unable to updated record: ', error.message)
            })
    }

    const toggleModal = (e) => {
        setShowModal(!showModal)
    }

    return (
        <div>
            <span className="!hover:text-red-600">
                <button
                    className="m-0 p-0 !hover:text-red-600"
                    onClick={toggleModal}
                >
                    {EditSVGIcon}
                </button>
            </span>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm backdrop-brightness-50 backdrop-contrast-50">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-blue-50 dark:bg-slate-900 rounded-lg text-black">
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-4 text-white">
                                    Edit User Information
                                </h2>
                                <form onSubmit={handleSubmit} className="">
                                    {editFormParams.map((field) => {
                                        return (
                                            <div
                                                className="mb-4 flex"
                                                key={field.id}
                                            >
                                                <div className="w-1/2">
                                                    <label className="text-white mr-2">
                                                        {field.label}
                                                    </label>
                                                </div>
                                                <input
                                                    className="grow rounded-md h-5"
                                                    type={field.type}
                                                    placeholder={
                                                        field.placeholder
                                                    }
                                                    name={field.name}
                                                    defaultValue={
                                                        user[field.name] // Use bracket notation for selector
                                                    }
                                                    onChange={handleChange}
                                                    required={true}
                                                />
                                            </div>
                                        )
                                    })}

                                    <div className="flex justify-between">
                                        <button className="bg-gray-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                                            Save
                                        </button>
                                        <button
                                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={toggleModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EditUser
