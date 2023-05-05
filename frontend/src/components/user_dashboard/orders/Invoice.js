import React, { useEffect, useState } from 'react'

import { getOneOrderItems } from '../../../services/OrderService'

const formatDate = (dateString) => {
    //'2023-05-03'
    const dateObject = new Date(Date.parse(dateString.replace(/-/g, ' ')))
    const formattedDate = dateObject.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    })
    return formattedDate
}

const statusChecker = (status) => {
    if (status === 'pick up') {
        return (
            <button className="p-1 w-20 text-xs font-bold rounded-lg text-black  bg-yellow-400">
                Pick Up
            </button>
        )
    } else if (status === 'cancelled') {
        return (
            <button className="py-1 w-20 text-xs rounded-lg text-white font-bold bg-gray-600">
                Cancelled
            </button>
        )
    } else if (status === 'preparing') {
        return (
            <button className="py-1 w-20 text-xs rounded-lg text-white font-bold bg-teal-900">
                Preparing
            </button>
        )
    } else if (status === 'on the way') {
        return (
            <button className="py-1 w-20 text-xs rounded-lg text-white font-bold bg-orange-600">
                On the Way
            </button>
        )
    } else if (status === 'delivered') {
        return (
            <button className="py-1 w-20 text-xs rounded-lg text-white font-bold bg-lime-600">
                Delivered
            </button>
        )
    }
}

const paymentChecker = (payment) => {
    if (payment) {
        return (
            <button className="p-1 w-20 text-xs font-bold rounded-lg text-white  bg-green-600">
                Paid
            </button>
        )
    } else {
        return (
            <button className="py-1 w-20 text-xs rounded-lg text-black font-bold bg-yellow-400">
                Unpaid
            </button>
        )
    }
}

const MOPChecker = (MOP) => {
    if (MOP === 'gcash') {
        return (
            <button className="p-1 w-20 text-xs font-bold rounded-lg text-white  bg-sky-900">
                Gcash
            </button>
        )
    } else {
        return (
            <button className="py-1 w-20 text-xs rounded-lg text-white font-bold bg-slate-700">
                COD
            </button>
        )
    }
}

function Invoice({ order }) {
    const [showModal, setShowModal] = useState(false)
    const [orderItemsDetails, setOrderItemsDetails] = useState([])

    const orderDetails = [order]

    useEffect(() => {
        getOneOrderItems(order.user_id)
            .then((order_items) => {
                setOrderItemsDetails(order_items)
            })
            .catch((error) => {
                console.log(error)
            })
    })

    const toggleModal = (e) => {
        setShowModal(!showModal)
    }

    return (
        <>
            <span className="!hover:text-red-600">
                <button
                    className="m-0 p-0 !hover:text-red-600"
                    onClick={toggleModal}
                >
                    <svg
                        width="16px"
                        height="16px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="#5C5F62"
                            d="M16.707 6.293l3 3a.998.998 0 010 1.414l-3 3a.997.997 0 01-1.631-.324 1 1 0 01.217-1.09L16.586 11H12a1 1 0 110-2h4.586l-1.293-1.293a1 1 0 111.414-1.414zM3.293 6.293a1 1 0 111.414 1.414L3.414 9H8a1 1 0 010 2H3.414l1.293 1.293a1.003 1.003 0 010 1.414 1 1 0 01-1.414 0l-3-3a.998.998 0 010-1.414l3-3z"
                        />
                        <path
                            fill="#5C5F62"
                            d="M1 1.5A1.5 1.5 0 012.5 0h15A1.5 1.5 0 0119 1.5V6l-2-2V2H3v2L1 6V1.5zM17 18v-2l2-2v4.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 011 18.5V14l2 2v2h14z"
                        />
                    </svg>
                </button>
            </span>

            {showModal && (
                <div className="flex items-center justify-center fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm backdrop-brightness-50 backdrop-contrast-50">
                    <div className=" bg-gradient-to-b from-white from-75% to-slate-900 to-25% rounded-lg text-black w-[750px] h-[550px]">
                        <div className="p-10 text-sm">
                            <div className="flex justify-between">
                                <div className="flex justify-start gap-5 mb-5">
                                    <img
                                        className="h-10  mt-0.75"
                                        src={require('../../../assets/img/e_refill_logo.webp')}
                                        alt="logo"
                                    />
                                    <h2 className="text-left text-lg font-bold text-black">
                                        Invoice
                                    </h2>
                                </div>
                                <div>
                                    <button className="" onClick={toggleModal}>
                                        <svg
                                            className="hover:text-red-400 text-red-600"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 100 100"
                                            enableBackground="new 0 0 100 100"
                                            xmlSpace="preserve"
                                        >
                                            <path d="M84.707,68.752L65.951,49.998l18.75-18.752c0.777-0.777,0.777-2.036,0-2.813L71.566,15.295 c-0.777-0.777-2.037-0.777-2.814,0L49.999,34.047l-18.75-18.752c-0.746-0.747-2.067-0.747-2.814,0L15.297,28.431 c-0.373,0.373-0.583,0.88-0.583,1.407c0,0.527,0.21,1.034,0.583,1.407L34.05,49.998L15.294,68.753 c-0.373,0.374-0.583,0.88-0.583,1.407c0,0.528,0.21,1.035,0.583,1.407l13.136,13.137c0.373,0.373,0.881,0.583,1.41,0.583 c0.525,0,1.031-0.21,1.404-0.583l18.755-18.755l18.756,18.754c0.389,0.388,0.896,0.583,1.407,0.583c0.511,0,1.019-0.195,1.408-0.583 l13.138-13.137C85.484,70.789,85.484,69.53,84.707,68.752z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between mb-8">
                                <div className="w-4/6 leading-relaxed tracking-wide">
                                    <div>
                                        <span className="">Customer: </span>
                                        <span className="text-base font-medium">
                                            Celine R. Odivilas
                                        </span>
                                    </div>
                                    <div>
                                        <span className="">
                                            Date Issued:{' '}
                                            <span className="font-bold">
                                                {formatDate('2023-05-02')}
                                            </span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="">
                                            Delivery Date:{' '}
                                            <span className="font-bold">
                                                {formatDate('2023-05-02')}
                                            </span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="">
                                            Delivery Time:{' '}
                                            <span className="font-bold">
                                                1:30 PM
                                            </span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="">
                                            Invoice No.:{' '}
                                            <span className="font-bold">
                                                {order.order_id}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="w-2/6 leading-relaxed tracking-wide">
                                    <div className="font-medium">Address:</div>
                                    <div className="">
                                        <span className="">
                                            41 Samonte St.,
                                        </span>
                                        <span className="">
                                            Brgy. Holy Spirit,
                                        </span>
                                        <br />
                                        <span className=""> Quezon City,</span>
                                        <span className=""> Philippines</span>
                                        <span className="mb-5"> 1270</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[140px]">
                                {/* As table headers */}
                                <div className="flex justify-between mb-2 font-medium">
                                    <div className="w-2/5 text-left text-xs uppercase">
                                        Description
                                    </div>
                                    <div className="w-1/5 text-center text-xs uppercase">
                                        Unit Price
                                    </div>
                                    <div className="w-1/5 text-center text-xs uppercase">
                                        Quantity
                                    </div>
                                    <div className="w-1/5 text-right text-xs uppercase">
                                        Sub Total
                                    </div>
                                </div>

                                <hr className="w-full py-2"></hr>

                                {/* As table body data */}
                                <div className="leading-9 tracking-wide">
                                    {orderItemsDetails.map(
                                        (order_item, index) => {
                                            return (
                                                <div key={index}>
                                                    {Number(
                                                        orderDetails[0].order_id
                                                    ) ===
                                                    Number(
                                                        order_item.order_id
                                                    ) ? (
                                                        <>
                                                            <div className="flex justify-between font-bold">
                                                                <div className="w-2/5 text-left">
                                                                    {
                                                                        order_item.name
                                                                    }{' '}
                                                                    {
                                                                        order_item.capacity
                                                                    }
                                                                </div>
                                                                <div className="w-1/5 text-center">
                                                                    {
                                                                        order_item.refill_price
                                                                    }
                                                                </div>
                                                                <div className="w-1/5 text-center">
                                                                    {
                                                                        order_item.quantity
                                                                    }
                                                                </div>
                                                                <div className="w-1/5 text-right text-orange-600">
                                                                    {
                                                                        order_item.total_price
                                                                    }
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div></div>
                                                        </>
                                                    )}
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </div>

                            <div className="mt-14 text-base text-white">
                                {/* As table headers */}
                                <div className="flex justify-between mb-2 font-medium">
                                    <div className="w-1/4 text-left text-xs uppercase">
                                        Mode of Payment
                                    </div>
                                    <div className="w-1/4 text-center text-xs uppercase">
                                        Payment
                                    </div>
                                    <div className="w-1/4 text-center text-xs uppercase">
                                        Status
                                    </div>
                                    {/* <div className="w-1/3 text-center text-xs uppercase">Due By</div> */}
                                    <div className="w-1/4 text-right text-xs uppercase">
                                        Total Due
                                    </div>
                                </div>

                                <hr className="w-full pt-2"></hr>

                                {/* As table body data */}
                                <div className="leading-loose tracking-wide">
                                    <div className="flex justify-between font-bold">
                                        <div className="w-1/4 text-left">
                                            {MOPChecker(order.mode_of_payment)}
                                        </div>
                                        <div className="w-1/4 text-center">
                                            {paymentChecker(order.is_paid)}
                                        </div>
                                        <div className="w-1/4 text-center">
                                            {statusChecker(order.status)}
                                        </div>
                                        <div className="w-1/4 text-right text-orange-600">
                                            ₱{order.total_price}
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="text-right mt-2 text-xs"><span className='text-red-900'>❤</span> Thank you!</div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Invoice
