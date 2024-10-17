const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const { orders, meals, users } = require('./routes')


const app = express()

app.use(bodyParser.json())

app.use(cors())

mongoose.connect(
    process.env.MONGO_URI,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use('/api/orders', orders)  
app.use('/api/meals', meals)
app.use('/api/auth', users)
// app.use('/api/auth', auth)

module.exports = app