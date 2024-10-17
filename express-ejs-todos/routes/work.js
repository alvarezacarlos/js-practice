const express = require("express");
const day = require('../util/date')

const router = express.Router();
const workItems = []

router.get('/', (req, res) => { 
    res.render('work', {day: day, items: workItems});
})

router.post('/', (req, res) => {
    const { newItem } = req.body
    workItems.push(newItem)
    res.redirect('/work')
})

module.exports = router