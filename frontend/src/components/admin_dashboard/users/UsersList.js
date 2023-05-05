import React, { useEffect, useState, useMemo } from 'react'
import '../../../App'

import EditUser from './EditUser'
import { deleteUser, getAllUsers } from '../../../services/UserService'
import DataTable from 'react-data-table-component'
import { ImCross } from '../../../assets/icons/icons'
import { TrashSVGIcon } from '../../../assets/icons/svgs/svgs'
import { columns } from '../../../data/tableColumnHeaders'

function UsersList() {
    const [users, setUsers] = useState([])
    const [alertDeleteMessage, setAlertDeleteMessage] = useState('')
    const [alertEditedMessage, setAlertEditedMessage] = useState('')

    useEffect(() => {
        getAllUsers()
            .then((users) => {
                setUsers(users)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [alertDeleteMessage, alertEditedMessage])

    const [records, setRecords] = useState([])

    try {
        useMemo(() => setRecords(users), [users])
    } catch (error) {
        console.log('Error: ', error)
    }

    const handleDelete = (userID, userName) => {
        deleteUser(userID)
            .then(() =>
                setAlertDeleteMessage(`Successfully deleted user: ${userName}`)
            )
            .catch((error) => console.log(error))
    }

    const handleSetAlertEdited = (userName) => {
        setAlertEditedMessage(`Successfully edited user: ${userName}`)
    }

    const handleDelAlertClose = () => {
        setAlertDeleteMessage()
    }

    const handleEditAlertClose = () => {
        setAlertEditedMessage()
    }

    const handleFilter = (event) => {
        const newData = users.filter((row) => {
            return row.username
                .toLowerCase()
                .includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }

    const customData =
        records && records.length > 0
            ? records.map((user) => {
                  return {
                      username: user.username,
                      email: user.email,
                      first_name: user.first_name,
                      middle_name: user.middle_name,
                      last_name: user.last_name,
                      gender: user.gender,
                      mobile_number: user.mobile_number,
                      role: user.role,
                      actions: (
                          <div className="flex items-center">
                              <EditUser
                                  user={user}
                                  handleSetAlertEdited={handleSetAlertEdited}
                              />
                              <div className="flex-col gap-2 justify-center group relative py-1 px-4 overflow-visible">
                                  <button
                                      className="m-0 p-0"
                                      data-tooltip-target="tooltip-hover"
                                      onClick={() =>
                                          handleDelete(user.id, user.username)
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
        <div className="">
            <h2 className="font-bold text-xl p-2 text-transparent bg-clip-text bg-gradient-to-r to-slate-900 from-orange-600">
                User Information
            </h2>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleFilter}
                className="py-1 my-2 text-sm rounded px-4 "
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
                {/* <div className="text-end"><input type="text" className="bg-white" onChange={handleFilter} /></div> */}
                <DataTable
                    columns={columns}
                    data={customData}
                    selectableRows
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="300px"
                ></DataTable>
            </div>
        </div>
    )
}

export default UsersList
