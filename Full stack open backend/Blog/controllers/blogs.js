const blogRouters = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");

blogRouters.get("/", async (request, response) => {
  try {
    const getBlogs = await Blog.find({}).populate("user", {username: 1, name: 1});
    response.status(200).json(getBlogs);
  }catch(error) {
    console.log(error)
  }
  // Blog.find({}).then((blogs) => {
  //   console.log(blogs);
  //   response.json(blogs);
  // });
});


blogRouters.post("/", async (request, response, next) => {
  const {body} = request;
  if (body.title === undefined || body.url === undefined) return response.status(400).json({error: "Tittle or url missed"});

  const user = await User.findById(body.user);
  const blog = new Blog({...request.body, likes: body.likes || 0});

  try {
    const savedBlog = await blog.save();
    user.blogs = user.blogs.concat(savedBlog._id);
    await user.save();
    response.status(201).json(savedBlog);
  }catch(error) {
    next(error);
  }
  // blog.save().then((result) => {
  //   response.status(201).json(result);
  // });
});

blogRouters.delete("/:id", async(request, response, next) => {
  try {
    await Blog.findByIdAndRemove(request.params.id);
    response.status(204).end();
  }catch(error) {
    next(error);
  };
});

blogRouters.put("/:id", async(request, response, next) => {
  const {body} = request;

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
    };

  try{
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {new: true});
    response.status(200).json(updatedBlog);
  }catch(error) {
    next(error);
  };
});

module.exports = blogRouters;