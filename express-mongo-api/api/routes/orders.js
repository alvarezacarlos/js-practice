const express = require('express')

const { Orders } = require('../models')

const { isAuthenticated } = require('../auth')

const router = express.Router()

router.get('/', (req, res) => {
    Orders.find()
        .exec()
        .then(x => res.status(200).send(x))
})

router.get('/:id', (req, res) => {
    Orders.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})


// router.post('/', isAuthenticated, hasRole('user'), (req, res) => {
// router.post('/', isAuthenticated, hasRole(['user', 'admin']), (req, res) => {
router.post('/', isAuthenticated, (req, res) => {
    const { _id } = req.user
    const { meal_id } = req.body
    // Orders.create({ ...req.body, user_id: _id })
    Orders.create({ meal_id, user_id: _id })
        .then(x => res.status(201).send(x))
})

// router.put('/:id', isAuthenticated, hasRole(['user', 'admin']), (req, res) => {
router.put('/:id', (req, res) => {
    Orders.findOneAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204))
})

// router.patch('/', (req, res) => {
//     res.send('Hi from orders.js')
// })

// router.delete('/:id', isAuthenticated, hasRole(['user', 'admin']), (req, res) => {
router.delete('/:id', (req, res) => {
    Orders.findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204))
})


module.exports = router