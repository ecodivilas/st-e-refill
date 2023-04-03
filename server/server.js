require('dotenv').config()

// IMPORTS
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

// Import Controller
const usersController = require('./controller/users')

// USE OF IMPORTS or CONSTANTS
// Initialize Express App
const app = express()

// Setup Port
const port = process.env.DB_PORT || 3000

// Express Setup
app.use(express.static(path.join(__dirname, './frontend/build/')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

// API Endpoints
app.get('/', (req, res) => {
    res.send('Welcome to E-Refill App!')
})

// USERS
app.get('/api/v1/users', (req, res) => {
    res.send('Users Endpoints')
})

// DELIVERY_ADDRESSES
app.get('/api/v1/delivery_addresses', (req, res) => {
    res.send('Delivery Addresses Endpoints')
})

// ORDERS
app.get('/api/v1/orders', (req, res) => {
    res.send('Orders Endpoints')
})

// ORDER_ITEMS
app.get('/api/v1/order_items', (req, res) => {
    res.send('Order Items Endpoints')
})

// CONTAINERS
app.get('/api/v1/containers', (req, res) => {
    res.send('Containers Endpoints')
})

// Express Listening Port
app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})

// console.log('WHAT IS THE PORT', port)
// console.log('WHAT IS THE PROCESS CRUSH', process.env)
// console.log('HAHHA', express.application.init)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })