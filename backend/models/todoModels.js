const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;