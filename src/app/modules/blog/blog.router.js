const express = require("express");
const { createBlog, getBlogs, getBlog, queryGetBlogs } = require("./blog.controller");
const router = express.Router()


router.post('/blog', createBlog)
router.get('/blog', getBlogs)
router.get('/blogs', queryGetBlogs)
router.get('/blog/:id', getBlog)

module.exports= router;