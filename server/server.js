require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

const usersController = require('./controller/users')
const containersController = require('./controller/containers')

const app = express()

const port = process.env.DB_PORT || 3000

app.use(express.static(path.join(__dirname, './frontend/build/')))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.post('/api/v1/users', (req,res) => {
    usersController.createUser(req.body.user).then((data) => res.json(data))
})

app.get('/api/v1/users', (req, res) => {
    usersController.getUsers().then((data) => res.json(data))
})

app.get('/api/v1/users/:id', (req,res) => {
    usersController.getUser(req.params.id).then((data) => res.json(data))
})

app.put("/api/v1/users", (req, res) => {
    usersController.updateUser(req.body.user).then((data) => res.json(data));
})

app.delete('/api/v1/users/:id', (req,res) => {
    usersController.deleteUser(req.params.id).then((data) => res.json(data))
})

app.get('/api/v1/delivery_addresses', (req, res) => {
    res.send('Delivery Addresses Endpoints')
})

app.get('/api/v1/orders', (req, res) => {
    res.send('Orders Endpoints')
})

app.get('/api/v1/order_items', (req, res) => {
    res.send('Order Items Endpoints')
})

// Containers
app.get('/api/v1/containers', (req, res) => {
    // res.send('Containers Endpoints')
    containersController.getContainers().then((data) => res.json(data))
    
})

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`)
})