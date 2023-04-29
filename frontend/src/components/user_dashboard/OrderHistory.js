import React from 'react'
// import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('/api/v1/users');

function OrderHistory() {
  return (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
    </Admin>
    // <div>OrderHistory</div>
  )
}

export default OrderHistory