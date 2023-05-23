const blogRouters = require("express").Router();
const Blog = require("../models/blog");

blogRouters.get("/", async (request, response) => {
  try {
    const getBlogs = await Blog.find({});
    response.status(200).json(getBlogs);
  }catch(error) {
    console.log(error)
  }
  // Blog.find({}).then((blogs) => {
  //   console.log(blogs);
  //   response.json(blogs);
  // });
});

blogRouters.post("/", async (request, response) => {
  const blog = new Blog(request.body);
  const savedBlog = await blog.save();
  response.status(201).json(savedBlog);
  // blog.save().then((result) => {
  //   response.status(201).json(result);
  // });
});

module.exports = blogRouters;