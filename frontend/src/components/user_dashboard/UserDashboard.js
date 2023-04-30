import React from 'react'

// import OrderHistory from './OrderHistory'
import { Admin, Resource } from 'react-admin'
// import { getAllUsers } from '../../services/UserService'
import UserList from './UserList'
import jsonServerProvider from 'ra-data-json-server'
// import PostList from './PostList'

function UserDashboard() {
  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //   getAllUsers()
  //   .then((users) => {
  //       setUsers(users)
  //   })
  //   .catch((error) => {
  //       console.log(error)
  //   })})
  
  return (
    <div>
      <Admin dataProvider={jsonServerProvider('http://localhost:3080/api/v1')}>
        <Resource basePath='/' name='users' list={UserList} />
      </Admin>

    </div>
  )
}

export default UserDashboard