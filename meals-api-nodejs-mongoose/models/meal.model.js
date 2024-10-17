const mongoose = require('mongoose')

const mealModel = {
  name: String,
  desc: String
}

const Meals = mongoose.model('Meal', new mongoose.Schema(mealModel))

module.exports = Meals