import React, { useState } from 'react'

import { editOrder } from '../../../services/OrderService'

const EditOrder = ({ order, handleSetAlertEdited }) => {
    const INITIAL_USER_DATA = {
        order_id: order.order_id ?? '',
        username: order.username ?? '',
        order_date: order.order_date ?? '',
        delivery_date: order.delivery_date ?? '',
        delivery_time: order.delivery_time ?? '',
        total_price: order.total_price ?? '',
        mode_of_payment: order.mode_of_payment ?? '',
        is_paid: order.is_paid ?? '',
        status: order.status ?? ''
    }

    const editFormParams = [
        {
            id: 1,
            label: 'Order ID',
            type: 'text',
            placeholder: 'Order ID',
            name: 'order_id',
            defaultValue: order.order_id,
        },
        {
            id: 2,
            label: 'Username',
            type: 'text',
            placeholder: 'Username',
            name: 'username',
            defaultValue: order.username,
        },
        {
            id: 3,
            label: 'Order Date',
            type: 'text',
            placeholder: 'Order Date',
            name: 'order_date',
            defaultValue: order.order_date,
        },
        {
            id: 4,
            label: 'Delivery Date',
            type: 'text',
            placeholder: 'Delivery Date',
            name: 'delivery_date',
            defaultValue: order.delivery_date,
        },
        {
            id: 5,
            label: 'Delivery Time',
            type: 'text',
            placeholder: 'Delivery Time',
            name: 'delivery_time',
            defaultValue: order.delivery_time,
        },
        {
            id: 6,
            label: 'Total Price',
            type: 'text',
            placeholder: 'Total Price',
            name: 'total_price',
            defaultValue: order.total_price,
        },
        {
            id: 7,
            label: 'Mode of Payment',
            type: 'text',
            placeholder: 'Mode of Payment',
            name: 'mode_of_payment',
            defaultValue: order.mode_of_payment,
        },
        {
            id: 8,
            label: 'Payment',
            type: 'text',
            placeholder: 'Payment',
            name: 'is_paid',
            defaultValue: order.is_paid,
        },
        {
            id: 9,
            label: 'Status',
            type: 'text',
            placeholder: 'Status',
            name: 'status',
            defaultValue: order.status,
        }
    ]

    const [orderData, setUserData] = useState(INITIAL_USER_DATA)
    const [showModal, setShowModal] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData((prev) => {
            return { ...prev, [name]: value }
        })
        console.log(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editOrder(orderData)
            .then(() => {
                console.log(orderData)
                toggleModal()
            })
            .catch((error) => {
                console.error('Unable to updated record: ', error.message)
            })
    }

    const toggleModal = (e) => {
        setShowModal(!showModal)
    }

    const handleEditedMessage = () => handleSetAlertEdited(order.username)

    return (
        <div>
            <span className="!hover:text-red-600">
                <button
                    className="m-0 p-0 !hover:text-red-600"
                    onClick={toggleModal}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="m-0 p-0 w-4 h-4 !hover:text-red-600"
                    >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                    </svg>
                </button>
            </span>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm backdrop-brightness-50 backdrop-contrast-50">
                    {/* <div className="flex items-center justify-center min-h-screen"> */}
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="bg-blue-50 dark:bg-slate-900 rounded-lg text-black">
                            <div className="p-4">
                                <h2 className="text-lg font-bold mb-4 text-white">
                                    Edit Order Information
                                </h2>
                                <form onSubmit={handleSubmit} className="">
                                    {editFormParams.map((field) => {
                                        return (
                                            <div className="mb-4 flex">
                                                <div className="w-1/2">
                                                    <label className="text-white mr-2">
                                                        {field.label}
                                                    </label>
                                                </div>
                                                {(field.id !== 9 && field.id !== 8 && field.id !== 7) ?
                                                <>
                                                    <input key={field.id}
                                                        className="grow rounded-md h-5"
                                                        type={field.type}
                                                        placeholder={
                                                            field.placeholder
                                                        }
                                                        name={field.name}
                                                        // defaultValue={
                                                        //     field.defaultValue
                                                        // }
                                                        value={field.defaultValue}
                                                        onChange={handleChange}
                                                        required='true'
                                                        readOnly
                                                    />
                                                </>:
                                                <>
                                                {field.name === 'mode_of_payment' ?
                                                    <>
                                                        <select key={field.id} name={field.name} defaultValue={field.defaultValue} onChange={handleChange} className="px-2 mt-2 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                                                            <option value=""></option>
                                                            <option value="gcash">Gcash</option>
                                                            <option value="cash_on_delivery">Cash on Delivery</option>
                                                        </select>
                                                    </> : <></>}
                                                {field.name === 'is_paid' ?
                                                <>
                                                    <select key={field.id} name={field.name} defaultValue={field.defaultValue} onChange={handleChange} className="px-2 mt-2 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                                                        <option value=""></option>
                                                        <option value="true">Paid</option>
                                                        <option value="false">Unpaid</option>
                                                    </select>
                                                </> : <></>}
                                                {field.name === 'status' ?
                                                <>
                                                    <select key={field.id} name={field.name} defaultValue={field.defaultValue} onChange={handleChange} className="px-2 mt-2 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-sm block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                                                        <option value=""></option>
                                                        <option value="pick up">Pick Up</option>
                                                        <option value="cancelled">Cancelled</option>
                                                        <option value="preparing">Preparing</option>
                                                        <option value="on the way">On the Way</option>
                                                        <option value="delivered">Delivered</option>
                                                    </select>
                                                </> : <></>}
                                                </>}
                                            </div>
                                        )
                                    })}

                                    <div className="flex justify-between">
                                        <button onClick={handleEditedMessage} className="bg-gray-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
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

export default EditOrder
