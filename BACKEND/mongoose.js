const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/data').then(() => {
    console.log('Connected to MongoDB')
}).catch(() => {
    console.log('Failed to connect to MongoDB')
})

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    State: {
        type: String,
    },
    age: {
        type: Number,
        min: 0,
        max:80
    },
    password: {
        type: String,
        required: true
    }
})

const users = mongoose.model('users', schema);
module.exports = users;