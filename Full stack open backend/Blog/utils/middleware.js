const logger = require("../utils/logger");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "Unknown endpoint" });
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === "CastError")
    return response.status(400).send({ error: "Malformated id" });

  next(error);
};

const tokenStractor = (request, response, next) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    request.token = authorization.substring(7);
  }
  next();
};

const userExtractor = async(request, response, next) => {
  if (request.token === undefined) return next(); 
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  if (decodedToken.id) request.user = await User.findById(decodedToken.id);
  next();
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  tokenStractor,
  userExtractor,
};
