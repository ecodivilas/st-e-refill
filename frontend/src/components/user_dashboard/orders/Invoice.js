import React, { useEffect, useState } from 'react'

import { getOneOrderItems } from '../../../services/OrderService'
import { CrossSVGIcon, PreviewSVGIcon } from '../../../assets/icons/svgs/svgs'
import { statuses } from '../../../data/InvoiceData'

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

const showStatusBadge = (s) => {
    const result = statuses.filter((status) => status.status === s)
    return (
        <button
            className={`p-1 w-${result[0].width} text-xs font-bold rounded-lg text-${result[0].textColor}  bg-${result[0].bgColor}`}
        >
            {result[0].label}
        </button>
    )
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
                    {PreviewSVGIcon}
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
                                        {CrossSVGIcon}
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
                                            {showStatusBadge(order.status)}
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
