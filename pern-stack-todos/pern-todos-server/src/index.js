const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { SERVER_PORT } = require("./config");


const router = require('./routes/task.routes')

const app = express()


app.use(cors())

app.use(express.json())

app.use(morgan('dev'))

app.use(router)

// middleware guarde errores
app.use((error, req, res, next) => {
    return res.json({message: error.message})
})

app.listen(SERVER_PORT || 7000)

console.log('Server running on Port ', SERVER_PORT || 7000)