const config = require("./utils/config");
const { mongoUrl } = config;
const express = require("express");
const app = express();
const cors = require("cors");
const blogsRouter = require("./controllers/blogs");
const userRouter = require("./controllers/users");
const loginRouter = require("./controllers/logis");
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
 app.use(middleware.tokenStractor);
 app.use("/api/blogs", middleware.userExtractor,blogsRouter);//Este middleware solo se ejecuta con las rutas de blogs;
 app.use("/api/users", userRouter);
 app.use("/api/login", loginRouter);
 app.use(middleware.unknownEndpoint);
 app.use(middleware.errorHandler);

 module.exports = app;