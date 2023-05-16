const config = require("./utils/config");
const { mongoUrl } = config;
const express = require("express");
const app = express();
const cors = require("cors");
const blogsRouter = require("./controllers/blogs");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const mongoose = require("mongoose");

logger.info("Connecting to:" , mongoUrl);

mongoose.connect(mongoUrl)
 .then(res => logger.info("Connected to:", mongoUrl))
 .catch(error => logger.error("Error connecting to MongoDB:", error.message));

 app.use(cors());
 app.use(express.json());
 app.use(middleware.requestLogger);
 app.use("/api/blogs", blogsRouter);
 app.use(middleware.unknownEndpoint);
 app.use(middleware.errorHandler);

 module.exports = app;