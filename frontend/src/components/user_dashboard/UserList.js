import React from 'react'
import {
    List,
    Datagrid,
    TextField,
    // DateField,
    EditButton,
    DeleteButton
} from 'react-admin'

const UserList = (props) => {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source='username' />
            <TextField source='first_name' />nmjk
            <TextField source='middle_name' />
            <TextField source='last_name' />
            <TextField source='gender' />
            <TextField source='age' />
            <EditButton basePath='/users' />
            <DeleteButton basePath='/users' />
        </Datagrid>
    </List>
  )
}

export default UserList