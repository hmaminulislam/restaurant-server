const Blog = require("./blog.model");

const blogPost = async (blog) => {
    try {
        const blogNew = await Blog.create(blog);
        return blogNew;
    } catch (error) {
        return error
    }
};

const blogs = async () => {
    const getblogs = await Blog.find()
    return getblogs;
}

const blogIdDb = async (blogId) => {
    const blog = await Blog.findById(blogId);
    return blog
}


module.exports = { blogPost, blogs, blogIdDb };