const Todo = require('../models/todo.model.js')

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({})
        res.status(200).json(todos)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const getTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id)
        res.status(200).json(todo)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        res.status(200).json(todo)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params; 
        const todo = await Todo.findByIdAndUpdate(id, req.body)

        if (!todo) {
            return res.status(404).json({message: "Todo Not Found"})
        }
        const updatedTodo = await Todo.findById(id)
        res.status(200).json(updatedTodo)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params; 
        const todo = await Todo.findByIdAndDelete(id); 

        if(!todo) {
            return res.status(404).json({message: "Todo Not Found"})
        }

        res.status(200).json({message: "Todo Deleted Successfully"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    getTodos, 
    getTodo, 
    createTodo, 
    updateTodo, 
    deleteTodo
}