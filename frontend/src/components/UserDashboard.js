import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../services/UserService'


function UserDashboard() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers().then((user) => {
            setUsers(user)
        })
    }, [])
    return (
    <div>
        <table>
            <tr>
                <th>id</th>
                <th>username</th>
                <th>password</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>gender</th>
                <th>age</th>
                <th>delivery_address</th>
                <th>phone</th>
                <th>email</th>
                <th>role</th>
            </tr>
            {users.map((user) => {
                return (
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.gender}</td>
                        <td>{user.age}</td>
                        <td>{user.delivery_address}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>
                )
            })}
        </table>
  </div>
  )
}

export default UserDashboard