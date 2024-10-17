const { Router } = require("express");
const pool = require("../db");

const router = Router();

const getAllTasks = async (req, res, next) => {
  try{
    const result = await pool.query("SELECT * FROM task");
    if (result.rows.length === 0) {
        return res.status(404).json([]);
    }    
    return res.json(result.rows);
  }
  catch(error){
    // res.json({ message: error.message });
    next(error)
  }
};

const getOneTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    // throw new Error('algo esta mal!')
    const result = await pool.query("select * from task where id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.json(result.rows[0]);
  } catch (error) {
    // res.json({ message: error.message });
    next(error)
  }
};

const createOneTask = async (req, res, next) => {
  const { title, description } = req.body;
  console.log(title, description)
  try {
    const result = await pool.query(
      "INSERT INTO task(title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );

    console.log(result.rows[0])
    res.send(result.rows[0]);
  } catch (error) {
    // res.json({ error: error.message });
    next(error)
  }
};

const deleteOneTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("delete from task where id = $1", [id]);
    return res.sendStatus(200);
  } catch (error) {
    // res.json({ message: error.message });
    next(error)
  }
};

const updateOneTask = async (req, res, next) => {
  const { title, description } = req.body;
  const { id } = req.params;
  try {
    const result = await pool.query(
      "UPDATE task set title = $1, description = $2 where id = $3 RETURNING *",
      [title, description, id]
    );

    res.send(result.rows[0]);
  } catch (error) {
    // res.json({ error: error.message });
    next(error)
  }
};

module.exports = {
  getAllTasks,
  getOneTask,
  createOneTask,
  deleteOneTask,
  updateOneTask,
};
