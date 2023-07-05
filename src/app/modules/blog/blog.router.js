const express = require("express");
const { createBlog } = require("./blog.controller");
const router = express.Router()


router.post('/blog', createBlog)

module.exports= router;