require('dotenv').config()

// IMPORTS
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

// Import Controller
const usersController = require('./controller/users')

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

// create
app.post('/api/v1/users', (req,res) => {
    const data = req.body
    usersController.createUser(data).then((data) => res.send("successful"))
})

// get
app.get('/api/v1/users', (req, res) => {
    // res.send('Users Endpoints')
    usersController.getUsers().then((users) => res.json(users))
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