const Blog = require("./blog.model");

const blogPost = async (blog) => {
    try {
        const blogNew = await Blog.create(blog);
        return blogNew;
    } catch (error) {
        return error
    }
};

const queryBlogs = async (req) => {
    const size = req.query.size;
    const page = req.query.page;
    const blogs = await Blog.find().skip(page * size).limit(size)
    const count = await Blog.estimatedDocumentCount()
    return {blog: blogs, count: count};
}

const getBlogsDb = async () => {
    const blogs = await Blog.find()
    return blogs;
}

const blogIdDb = async (blogId) => {
    const blog = await Blog.findById(blogId);
    return blog
}


module.exports = { blogPost, queryBlogs, blogIdDb, getBlogsDb };