const express = require('express');
const router = express.Router();
const {
    getPosts,
    addPosts,
    delPosts,
    updatePost
} = require('../controller/postController');

// Map assignment endpoints to controller methods
router.get('/getPosts', getPosts);
router.post('/addPosts', addPosts);
router.delete('/delPosts/:id', delPosts);
router.delete('/delPosts', delPosts); // Fallback for body/query parameter deletion
router.patch('/post/:id', updatePost);


module.exports = router;