
const express = require('express')
const bodyParser = require('body-parser')

// import routes
const work = require('./routes/work')
const school = require('./routes/school')

// conf
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static('public'))


// use routes
app.use('/work', work)
app.use('/school', school)


app.listen(3000, () => console.log(3000))
