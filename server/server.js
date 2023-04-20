require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

const usersController = require('./controller/users')
const containersController = require('./controller/containers')
const ordersController = require('./controller/orders')

const app = express()

const port = process.env.DB_PORT || 3000

app.use(express.static(path.join(__dirname, './frontend/build/')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

// Users
app.post('/api/v1/users', (req, res) => {
    usersController.createUser(req.body.user).then((data) => res.json(data))
})

app.get('/api/v1/users', (req, res) => {
    usersController.getUsers().then((data) => res.json(data))
})

app.get('/api/v1/users/:id', (req, res) => {
    usersController.getUser(req.params.id).then((data) => res.json(data))
})

app.put('/api/v1/users', (req, res) => {
    usersController.updateUser(req.body.user).then((data) => res.json(data))
})

app.delete('/api/v1/users/:id', (req, res) => {
    usersController.deleteUser(req.params.id).then((data) => res.json(data))
})

// Delivery Addresses
app.get('/api/v1/delivery_addresses', (req, res) => {
    res.send('Delivery Addresses Endpoints')
})

// Containers
app.get('/api/v1/containers', (req, res) => {
    containersController.getContainers().then((data) => res.json(data))
})

// Orders ===================================================================================>
app.post('/api/v1/orders', (req, res) => {
    ordersController.createOrder(req.body.order).then((data) => res.json(data))
    // res.send(req.body.order)
})

app.get('/api/v1/orders', (req, res) => {
    ordersController.getOrders().then((data) => res.json(data))
})

app.put('/api/v1/orders', (req, res) => {
    ordersController.updateOrder(req.body.order).then((data) => res.json(data))
})

app.delete('/api/v1/orders/:id', (req, res) => {
    ordersController.deleteOrder(req.params.id).then((data) => res.json(data))
})

// Order_Items
app.get('/api/v1/order_items', (req, res) => {
    res.send('Order Items Endpoints')
})


app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})