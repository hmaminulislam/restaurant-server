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
  bodyImgOne: {
    type: String,
    required: true,
  },
  bodyImgTwo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  writer: {
    type: String,
    required: true,
  },
  writerDesc: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },

  subBodyOne: {
    title: { type: String, required: true },
    contentOne: { type: String, required: true },
    contentTwo: { type: String, required: true },
  },
  subBodyTwo: {
    title: { type: String, required: true },
    contentOne: { type: String, required: true },
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog