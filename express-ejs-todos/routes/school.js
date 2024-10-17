const express = require("express");
const day = require('../util/date')

const router = express.Router();
const school_items = []

router.get('/', (req, res) => { 
    res.render('school', {day: day, items: school_items});
})

router.post('/', (req, res) => {
    const { newItem } = req.body
    school_items.push(newItem)
    res.redirect('/school')
})

module.exports = router