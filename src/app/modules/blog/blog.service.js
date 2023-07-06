const Blog = require("./blog.model");

const blogPost = async (blog) => {
    const blogNew = await Blog.create(blog);
    return blogNew;
};

const blogs = async () => {
    const getblogs = await Blog.find()
    return getblogs;
}


module.exports = {blogPost, blogs}