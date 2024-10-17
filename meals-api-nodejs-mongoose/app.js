const express = require('express')
const mongoose = require('mongoose')
const mealsRouter = require('./routes/meal.routes')
const bodyParser = require('body-parser')

const port = 3000
const app = express()

const user_name = ''
const password = ''

app.use(bodyParser.json())

mongoose.connect(
  `mongodb+srv://${user_name}:${password}@learning-one.p5vagqi.mongodb.net/?retryWrites=true&w=majority&appName=learning-one`
).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// routes
app.use(mealsRouter)

// middleware to handle errores
app.use((error, req, res, next) => {
  return res.json({message: error.message})
})

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})