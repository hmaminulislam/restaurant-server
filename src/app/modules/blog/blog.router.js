const express = require("express");
const { createBlog, getBlogs } = require("./blog.controller");
const router = express.Router()


router.post('/blog', createBlog)
router.get('/blog', getBlogs)

module.exports= router;