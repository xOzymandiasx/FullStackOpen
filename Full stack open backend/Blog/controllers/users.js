const userRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

userRouter.get("/", async(request, response) => {
  const users = await User.find({});
  response.status(200).json(users);
});

userRouter.post("/", async(request, response, next) => {
  const {body} = request;

  if (body.username.trim() === undefined || body.username.trim() === "" || body.password.trim() === undefined) return response.status(400).json({error: "Username or password are not defined"});
  if (body.username.trim().length <= 3 || body.password.trim().length <= 3) return response.status(400).json({error: "Username or password are too short"});

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const newUser = new User({
    username: body.username,
    name: body.name,
    passwordHash
  });

  try {
    const savedUser = await newUser.save();
    response.json(savedUser);
  }catch(error) {
    next(error);
  }
});

module.exports = userRouter;