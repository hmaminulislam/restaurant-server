const Blog = require("./blog.model");
const { blogPost, blogs, blogIdDb, queryBlogs, getBlogsDb } = require("./blog.service");

const createBlog = async (req, res) => {
    const blog = req.body;
    const newBlog = await blogPost(blog)
    res.send({status: true, blog: newBlog})
}

const queryGetBlogs = async (req, res) => {
    const newBlogs = await queryBlogs(req)
    res.send(newBlogs)
}

const getBlogs = async (req, res) => {
    const blogs = await getBlogsDb()
    res.send(blogs)
}

const getBlog = async (req, res) => {
    const blogId = req.params.id
    const blog = await blogIdDb(blogId)
    res.send(blog)
}
module.exports = { createBlog, getBlogs, getBlog, queryGetBlogs };