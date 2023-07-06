const Blog = require("./blog.model");
const { blogPost, blogs } = require("./blog.service");

const createBlog = async (req, res) => {
    const blog = req.body;
    const newBlog = await blogPost(blog)
    res.send({status: true, blog: newBlog})
}

const getBlogs = async (req, res) => {
    const newBlogs = await blogs()
    res.send(newBlogs)
}
module.exports = {createBlog, getBlogs}