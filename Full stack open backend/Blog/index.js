const app = require("./app");
const http = require("http");
// const express = require("express");
// const app = express();
const config = require("./utils/config");
const { PORT } = config;
// const cors = require("cors");
// const Blog = require("./models/blog");
const logger = require("./utils/logger");

// app.use(cors());
// app.use(express.json());

// app.get("/api/blogs", (request, response) => {
//   Blog.find({}).then((blogs) => {
//     console.log(blogs);
//     response.json(blogs);
//   });
// });

// app.post("/api/blogs", (request, response) => {
//   const blog = new Blog(request.body);

//   blog.save().then((result) => {
//     response.status(201).json(result);
//   });
// });

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
