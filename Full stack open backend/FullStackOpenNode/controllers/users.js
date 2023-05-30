const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/users");

usersRouter.get("/", async(request, response, next) => {
  const users = await User.find({}).populate("notes", {content: 1, date: 1}); // Con populate le decimos a la base de datos que nostraiga la nota y no el id de tal y con el objeto le decimos que traer de la nota
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