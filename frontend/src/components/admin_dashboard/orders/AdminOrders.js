import React, { useEffect, useMemo, useState } from 'react'

import EditOrder from './EditOrder'
import DataTable from 'react-data-table-component'
import { ImCross } from '../../../assets/icons/icons'
import { columns } from '../../../data/adminOrdersTableHeaders'
import { deleteOrder, getAllOrders } from '../../../services/OrderService'
import { EyesSVGIcon, TrashSVGIcon } from '../../../assets/icons/svgs/svgs'

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
            .then(() => {
                setAlertDeleteMessage(
                    `Successfully deleted order ID: ${orderID}`
                )
            })
            .catch((error) => console.log(error))
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
                      order: <button type="button">{EyesSVGIcon}</button>,
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
                                      {TrashSVGIcon}
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
