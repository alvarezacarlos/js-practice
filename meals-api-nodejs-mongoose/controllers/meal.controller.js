const Meals = require('../models/meal.model')

const getAllMeals = async (req, res, next) => {
  try{
    const meals = await Meals.find().exec()
    res.status(200).send({success: true, data: meals, error: null})
  }catch (error){    
    next(error)
  }
}

const getOneMeal = async (req, res, next) => {  
  const { id } = req.params
  try{
    const meal = await Meals.findById(id)
    res.status(200).send({success: true, data: meal, error: null})
  }catch(error){
    next(error)
  }
}

const createOneTask = async (req, res, next) => {

  const meal = {
    name: req.body?.name,
    desc: req.body?.desc
  } 

  try {
    const data = await Meals.create(meal)
    res.status(201).send({success: true, data: data, error: null})
  } catch(error){
    next(error)
  }
}

const updateOneTask = async (req, res, next)  => {
  const { id } = req.params
  const meal = {
    name: req.body?.name,
    desc: req.body?.desc
  }
  console.log(meal,id)
  try{
    const data = await Meals.findOneAndUpdate({ _id: id }, meal, {new: true})
    res.status(204).send({success: true, data: data, error: null })
  }catch(error){
    console.log(error)
    next(error)
  }

}

const deleteOneTask = async (req, res, next) => {
  const { id } = req.params
  try {
    const data = Meals.findByIdAndDelete(id).exec()
    res.status(204).send({success: true, data: data, error: null})
  }catch(error) {
    next(error)
  }
}

module.exports = {
  getAllMeals,
  getOneMeal,
  createOneTask,
  updateOneTask,
  deleteOneTask
}