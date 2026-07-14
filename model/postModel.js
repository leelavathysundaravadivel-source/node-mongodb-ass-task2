// models/postModel.js
const mongoose = require('mongoose');

// Define Schema with title and content as String datatype (As per assignment spec)
const schema = new mongoose.Schema({
    title: String,
    content: String
});

// Create model from schema using mongoose.model()
const Post = mongoose.model('Posts', schema);

module.exports = Post;