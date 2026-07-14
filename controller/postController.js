// controllers/postController.js
const Post = require('../model/postModel');

// i) GET /getPosts - Fetch all posts using find()
const getPosts = async(req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            success: true,
            count: posts.length,
            data: posts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve posts.',
            error: error.message
        });
    }
};

// ii) POST /addPosts - Save post using save()
const addPosts = async(req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = new Post({ title, content });

        // Save post to MongoDB
        const savedPost = await newPost.save();

        res.status(201).json({
            success: true,
            message: 'Post created successfully!',
            data: savedPost
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to save post.',
            error: error.message
        });
    }
};

// iii) DELETE /delPosts /delPosts/:id - Delete post using findByIdAndDelete()
const delPosts = async(req, res) => {
    try {
        const postId = req.params.id || req.query.id || req.body.id;

        if (!postId) {
            return res.status(400).json({
                success: false,
                message: 'Please provide post ID.'
            });
        }

        const deletedPost = await Post.findByIdAndDelete(postId);

        if (!deletedPost) {
            return res.status(404).json({
                success: false,
                message: 'Post not found with the provided ID.'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Post deleted successfully!',
            deletedData: deletedPost
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to delete post.',
            error: error.message
        });
    }
};

// iv) PATCH /post/:id - Update post using findByIdAndUpdate()
const updatePost = async(req, res) => {
    try {
        const postId = req.params.id;
        const updates = req.body;

        const updatedPost = await Post.findByIdAndUpdate(postId, updates, { new: true });

        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                message: 'Post not found with the provided ID.'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Post updated successfully!',
            data: updatedPost
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Failed to update post.',
            error: error.message
        });
    }
};

module.exports = {
    getPosts,
    addPosts,
    delPosts,
    updatePost
};