// Create web server
// Create a new comment
// Update a comment
// Delete a comment

// Dependencies
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Create a new comment
router.post('/', async (req, res) => {
    try {
        const comment = new Comment({
            // Add necessary fields here, for example:
            text: req.body.text,
            author: req.body.author
            });
                await comment.save();
                res.status(201).json(comment);
            } catch (err) {
                res.status(400).json({ message: err.message });
            }
        });