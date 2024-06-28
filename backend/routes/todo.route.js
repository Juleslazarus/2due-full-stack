const express = require('express'); 
const { getTodos, getTodo, updateTodo, deleteTodo, createTodo } = require('../controllers/todo.controller.js');
const router = express.Router(); 

//get routes
router.get('/', getTodos); 
router.get('/:id', getTodo)

//post routes
router.post('/', createTodo)

//put routes
router.put('/:id', updateTodo)

//delete routes
router.delete('/:id', deleteTodo)



module.exports = router; 