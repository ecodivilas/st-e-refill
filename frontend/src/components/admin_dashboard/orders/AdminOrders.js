import React, { useEffect, useMemo, useState } from 'react'

import EditOrder from './EditOrder'
import DataTable from 'react-data-table-component'
import { ImCross } from '../../../assets/icons/icons'
import { columns } from '../../../data/adminOrdersTableHeaders'
import { deleteOrder, getAllOrders } from '../../../services/OrderService'

function AdminOrders() {
    const [alertDeleteMessage, setAlertDeleteMessage] = useState('')
    const [alertEditedMessage, setAlertEditedMessage] = useState('')
    const [orders, setOrders] = useState([])

    useEffect(() => {
        getAllOrders()
            .then((orders) => {
                setOrders(orders)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [alertDeleteMessage, alertEditedMessage])

    const [records, setRecords] = useState([])

    try {
        useMemo(() => setRecords(orders), [orders])
    } catch (error) {
        console.log('Error: ', error)
    }

    const handleDelete = (orderID) => {
        deleteOrder(orderID)
        setAlertDeleteMessage(`Successfully deleted order ID: ${orderID}`)
    }

    const handleSetAlertEdited = (orderID) => {
        setAlertEditedMessage(`Successfully edited order ID: ${orderID}`)
    }

    const handleDelAlertClose = () => {
        setAlertDeleteMessage()
    }

    const handleEditAlertClose = () => {
        setAlertEditedMessage()
    }

    const handleFilter = (event) => {
        const newData = orders.filter((row) => {
            return row.orderID.includes(event.target.value)
        })
        setRecords(newData)
    }

    const statusChecker = (status) => {
        if (status === 'pick up') {
            return (
                <button className="py-1 w-20 text-xm rounded-lg text-black font-medium bg-yellow-400">
                    Pick Up
                </button>
            )
        } else if (status === 'cancelled') {
            return (
                <button className="py-1 w-20 text-xm rounded-lg text-white font-medium bg-gray-600">
                    Cancelled
                </button>
            )
        } else if (status === 'preparing') {
            return (
                <button className="py-1 w-20 text-xm rounded-lg text-white font-medium bg-teal-900">
                    Preparing
                </button>
            )
        } else if (status === 'on the way') {
            return (
                <button className="py-1 w-20 text-xm rounded-lg text-white font-medium bg-orange-600">
                    On the Way
                </button>
            )
        } else if (status === 'delivered') {
            return (
                <button className="py-1 w-20 text-xm rounded-lg text-white font-medium bg-lime-600">
                    Delivered
                </button>
            )
        }
    }

    const customData =
        records && records.length > 0
            ? records.map((order) => {
                  return {
                      order_id: order.order_id,
                      username: order.username,
                      order: (
                          <button type="button">
                              <svg
                                  fill="#000000"
                                  height="20px"
                                  width="20px"
                                  id="Layer_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  viewBox="0 0 42 42"
                                  enableBackground="new 0 0 42 42"
                                  xmlSpace="preserve"
                              >
                                  <path d="M15.3,20.1c0,3.1,2.6,5.7,5.7,5.7s5.7-2.6,5.7-5.7s-2.6-5.7-5.7-5.7S15.3,17,15.3,20.1z M23.4,32.4 C30.1,30.9,40.5,22,40.5,22s-7.7-12-18-13.3c-0.6-0.1-2.6-0.1-3-0.1c-10,1-18,13.7-18,13.7s8.7,8.6,17,9.9 C19.4,32.6,22.4,32.6,23.4,32.4z M11.1,20.7c0-5.2,4.4-9.4,9.9-9.4s9.9,4.2,9.9,9.4S26.5,30,21,30S11.1,25.8,11.1,20.7z" />
                              </svg>
                          </button>
                      ),
                      order_date: order.order_date,
                      delivery_schedule:
                          (order.delivery_date
                              ? order.delivery_date + ' '
                              : '') +
                          (order.delivery_time ? order.delivery_time : ''),
                      total_price: order.total_price,
                      mode_of_payment:
                          order.mode_of_payment === 'gcash' ? (
                              <button className="py-1 w-16 text-xm rounded-lg text-white font-medium bg-sky-900">
                                  Gcash
                              </button>
                          ) : (
                              <button className="py-1 w-16 text-xm rounded-lg text-white font-medium bg-slate-900">
                                  COD
                              </button>
                          ),
                      is_paid: order.is_paid ? (
                          <button className="py-1 w-16 text-xm rounded-lg text-white font-medium bg-lime-600">
                              Paid
                          </button>
                      ) : (
                          <button className="py-1 w-16 text-xm rounded-lg text-black font-medium bg-yellow-400">
                              Unpaid
                          </button>
                      ),
                      status: statusChecker(order.status),
                      actions: (
                          <div className="flex items-center">
                              <EditOrder
                                  order={order}
                                  handleSetAlertEdited={handleSetAlertEdited}
                              />
                              <div className="flex-col gap-2 justify-center group relative py-1 px-4 overflow-visible">
                                  <button
                                      className="m-0 p-0"
                                      data-tooltip-target="tooltip-hover"
                                      onClick={() =>
                                          handleDelete(order.order_id)
                                      }
                                  >
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 24 24"
                                          className="fill-current hover:text-red-600 text-slate-900 w-4 h-4 m-0 p-0"
                                      >
                                          <path
                                              fillRule="evenodd"
                                              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                              clipRule="evenodd"
                                          />
                                      </svg>
                                  </button>
                              </div>
                          </div>
                      ),
                  }
              })
            : []

    return (
        <>
            <h2 className="font-bold text-xl p-2 text-transparent bg-clip-text bg-gradient-to-r to-slate-900 from-orange-600">
                Orders
            </h2>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleFilter}
                className="hidden py-1 my-2 text-sm rounded px-4 "
            />
            <div className="">
                {alertEditedMessage && (
                    <div className="text-xs text-left bg-green-100 p-2 rounded-lg flex flex-row items-center justify-between">
                        <span className="text-green-900 font-semibold">
                            {alertEditedMessage}
                        </span>
                        <button type="button" onClick={handleEditAlertClose}>
                            <ImCross className="h-2 text-green-900" />
                        </button>
                    </div>
                )}

                {alertDeleteMessage && (
                    <div className="text-xs text-left bg-red-100 p-2 rounded-lg flex flex-row items-center justify-between">
                        <span className="text-red-900 font-semibold">
                            {alertDeleteMessage}
                        </span>
                        <button type="button" onClick={handleDelAlertClose}>
                            <ImCross className="h-2 text-red-900" />
                        </button>
                    </div>
                )}
            </div>

            <div className="flex flex-cols justify-center pt-3 gap-4 flex-wrap items-center">
                <DataTable
                    columns={columns}
                    data={customData}
                    selectableRows
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                    defaultSortAsc={false}
                ></DataTable>
            </div>
        </>
    )
}

export default AdminOrders
