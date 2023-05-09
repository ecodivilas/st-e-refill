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

// Users Endpoints
app.post('/api/v1/register', (req, res) => {
    usersController
        .registerUser(req.body)
        .then((data) => res.json(data))
        .catch((error) => res.status(500).send('Server error!'))
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

// Containers Endpoints
app.get('/api/v1/containers', (req, res) => {
    containersController.getContainers().then((data) => res.json(data))
})

// Orders Endpoints
app.post('/api/v2/order', (req, res) => {
    ordersController
        .createPendingOrder(req.body.order)
        .then((data) => res.json(data))
})

app.get('/api/v1/orders', (req, res) => {
    ordersController.getAllOrders().then((data) => res.json(data))
})

app.get('/api/v1/order/:id', (req, res) => {
    ordersController.getOneOrder(req.params.id).then((data) => res.json(data))
})

// Get all users order transactions
app.get('/api/v2/order_items', (req, res) => {
    ordersController.getAllOrderItems().then((data) => res.json(data))
})

// Get specific user's order transactions
app.get('/api/v2/order_items/:id', (req, res) => {
    ordersController
        .getOneOrderItems(req.params.id)
        .then((data) => res.json(data))
})

app.put('/api/v1/order', (req, res) => {
    ordersController.updateOrder(req.body.order).then((data) => res.json(data))
})

app.delete('/api/v1/orders/:id', (req, res) => {
    ordersController.deleteOrder(req.params.id).then((data) => res.json(data))
})

// API Login
app.post('/api/v1/login', (req, res) => {
    usersController
        .loginUser(req.body)
        .then((data) => res.json(data))
        .catch((error) => {
            console.log('Error:', error)
            res.status(500).send('Server error!')
        })
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})
