import React from 'react'

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
            <button className="py-1 w-20 text-xs rounded-lg text-white font-bold bg-slate-900">
                COD
            </button>
        )
    }
}

function Experiment() {
    let mode_of_payment = 'gcash'
    let status = 'delivered'
    let payment = 'unpaid'

    return (
        <div className="flex items-center justify-center fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm backdrop-brightness-50 backdrop-contrast-50">
            <div className=" bg-gradient-to-b from-white from-75% to-slate-900 to-25% rounded-lg text-black w-[750px] h-[550px]">
                <div className="p-10 text-sm">
                    <div className="flex justify-start gap-5 mb-5">
                        <img
                            className="h-8  mt-0.75"
                            src={require('../assets/img/e_refill_logo.webp')}
                            alt="logo"
                        />
                        <h2 className="text-left text-lg font-bold text-black">
                            Invoice
                        </h2>
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
                                    <span className="font-bold">1:30 PM</span>
                                </span>
                            </div>
                            <div>
                                <span className="">
                                    Invoice No.:{' '}
                                    <span className="font-bold">00021</span>
                                </span>
                            </div>
                        </div>
                        <div className="w-2/6 leading-relaxed tracking-wide">
                            <div className="font-medium">Address:</div>
                            <div>
                                <span className="">41 Samonte St.,</span>
                                <span className="">Brgy. Holy Spirit</span>,
                                <span className=""> Quezon City</span>,
                                <span className=""> Philippines</span>
                                <span className="mb-5"> 1270</span>
                            </div>

                            {/* <div className='my-2 flex justify-between text-left'>
                            <span className='w-1/3'>Payment: </span> <span>{paymentChecker(payment)}</span><span className='w-1/3'></span>
                        </div>
                        <div className='flex justify-between'>
                           <span className='w-1/3'>Status: </span> <span>{statusChecker(status)}</span><span className='w-1/3'></span>
                        </div> */}
                        </div>
                    </div>
                    <div>
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
                            <div className="flex justify-between font-bold">
                                <div className="w-2/5 text-left">
                                    Slim standard size 5 gal.
                                </div>
                                <div className="w-1/5 text-center">₱25.00</div>
                                <div className="w-1/5 text-center">2</div>
                                <div className="w-1/5 text-right text-orange-600">
                                    ₱50.00
                                </div>
                            </div>

                            <div className="flex justify-between font-bold">
                                <div className="w-2/5 text-left">
                                    Round standard size 5 gal.
                                </div>
                                <div className="w-1/5 text-center">₱25.00</div>
                                <div className="w-1/5 text-center">2</div>
                                <div className="w-1/5 text-right text-orange-600">
                                    ₱50.00
                                </div>
                            </div>

                            <div className="flex justify-between font-bold">
                                <div className="w-2/5 text-left">
                                    Half-slim standard size 5 gal.
                                </div>
                                <div className="w-1/5 text-center">₱15.00</div>
                                <div className="w-1/5 text-center">2</div>
                                <div className="w-1/5 text-right text-orange-600">
                                    ₱30.00
                                </div>
                            </div>
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
                                    {MOPChecker(mode_of_payment)}
                                </div>
                                <div className="w-1/4 text-center">
                                    {paymentChecker(payment)}
                                </div>
                                <div className="w-1/4 text-center">
                                    {statusChecker(status)}
                                </div>
                                {/* <div className="w-1/3 text-center">{formatDate('2023-05-02')}</div> */}
                                <div className="w-1/4 text-right text-orange-600">
                                    ₱130.00
                                </div>
                            </div>
                        </div>

                        {/* <div className="text-right mt-2 text-xs"><span className='text-red-900'>❤</span> Thank you!</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiment
