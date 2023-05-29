const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/users");

usersRouter.get("/", async(request, response, next) => {
  const users = await User.find({});
  response.status(200).json(users);
});

usersRouter.post("/", async(request, response, next) => {
  const {body} = request;

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
  };
  

});

module.exports = usersRouter;