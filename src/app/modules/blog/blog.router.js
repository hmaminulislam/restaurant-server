const express = require("express");
const { createBlog, getBlogs, getBlog, queryGetBlogs } = require("./blog.controller");
const { getProducts } = require("../product/product.controller");
const router = express.Router()


router.post('/blog', createBlog)
router.get('/blog', getBlogs)
router.get('/blogs', queryGetBlogs)
router.get('/blog/:id', getBlog)
router.get('/products', getProducts)

module.exports= router;