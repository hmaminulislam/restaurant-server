const Blog = require("./blog.model")

const createBlog = (req, res) => {
    const blog = req.body;
    const newBlog = Blog.create(blog)
    res.send(newBlog)
}

module.exports = {createBlog}