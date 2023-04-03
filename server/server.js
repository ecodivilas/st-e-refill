require('dotenv').config()

// IMPORTS
const express = require('express')

// USE OF IMPORTS or CONSTANTS
const app = express()
const port = process.env.DB_PORT || 3000

console.log('WHAT IS THE PORT', port)
console.log('WHAT IS THE PROCESS CRUSH', process.env.DB_CRUSH)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})