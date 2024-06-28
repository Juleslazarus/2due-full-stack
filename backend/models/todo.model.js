const mongoose = require('mongoose'); 

const TodoSchema = mongoose.Schema({
    todoTitle: {
        type: String, 
        require: [true, "Please Enter Todo Title"], 
    }, 
    todoText: {
        type: String, 
        require: true
    }, 
    todoTime: {
        type: String, 
        require: false
    }, 
    
}, {timestamps: true})

const Product = mongoose.model('Todo', TodoSchema)

module.exports = Product; 