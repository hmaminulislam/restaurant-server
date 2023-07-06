const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  fetureImg: {
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  authorDesc: {
    type: String,
    required: true,
  },
  publish: {
    type: String,
    required: true,
  },
  body: {
    summary: { type: String, required: true },
  },
  subbody: [
    {
      name: { type: String, required: true },
      content: { type: String, required: true },
    },
  ],
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog