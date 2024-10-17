const express = require('express')
const router = express.Router()
const mealController = require('../controllers/meal.controller')

router.get('/meals/', mealController.getAllMeals)
router.get('/meals/:id', mealController.getOneMeal)
router.post('/meals/', mealController.createOneTask)
router.put('/meals/:id', mealController.updateOneTask)
router.delete('/meals/:id', mealController.deleteOneTask)

module.exports = router