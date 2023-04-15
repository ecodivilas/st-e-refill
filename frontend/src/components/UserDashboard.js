import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../services/UserService'

import DataTable from 'react-data-table-component';

function UserDashboard() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers().then((user) => {
            setUsers(user)
        })
    }, [])

    console.log("Ito ang listahan nang mga users: ", users)

    const columns = [
        {
            name: 'Username',
            selector: row => row.username,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },
        {
            name: 'First Name',
            selector: row => row.first_name,
            sortable: true
        },
        {
            name: 'Middle Name',
            selector: row => row.middle_name,
            sortable: true
        },
        {
            name: 'Last Name',
            selector: row => row.last_name,
            sortable: true
        },
        {
            name: 'Gender',
            selector: row => row.gender,
            sortable: true
        },
        {
            name: 'Mobile No.',
            selector: row => row.mobile_no,
            sortable: true
        },
        {
            name: 'Role',
            selector: row => row.role,
            sortable: true
        },
        {
            name: 'Edit',
            selector: row => row.role,
            sortable: true
        },
        {
            name: 'Delete',
            selector: row => row.role,
            sortable: true
        },
    ]

    return (
        // <div>Hdshfsdhfsd</div>
        <div className='container mx-2 h-[100vh] mt-2'>
            <DataTable theme="dark"
            columns={columns}
            data={users}
            selectableRows
            pagination
            fixedHeader
            ></DataTable>
        </div>
  )
}

export default UserDashboard