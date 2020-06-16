const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        default: 'Anon'
    },
    content: {
        type: String,
        required: true,
    },
    posted_on: {
        type: String,
        required: true
    }

})
module.exports = mongoose.model('Blog', blogSchema)