const express = require("express");
const { createBlog, getBlogs, getBlog } = require("./blog.controller");
const router = express.Router()


router.post('/blog', createBlog)
router.get('/blog', getBlogs)
router.get('/blog/:id', getBlog)

module.exports= router;