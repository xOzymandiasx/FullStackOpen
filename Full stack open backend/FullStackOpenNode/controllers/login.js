const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/users");

loginRouter.post("/", async(request, response) => {
  const {body} = request;

  const user = await User.findOne({username: body.username});
  const passwordCorrect = user === null
   ? false
   : await bcrypt.compare(body.password, user.passwordHash);
  //Pedimos los datos del usuario a la base de datos;
   if(!(user && passwordCorrect)) {
    return response.status(401).json({error: "Invalid username or password"});
  };

  const userForToken = {
    username: user.username,
    id: user._id
  }; //Los datos que se guardan para despues poder verificar el id;

  const token = jwt.sign(userForToken, process.env.SECRET, {expiresIn: 60*60}); //En este paso se guardan los datos en el archivo ENV y se le pone un vencumiento al token de 1 hora;

  response.status(200).send({token, username: user.username, name: user.name});
});

module.exports = loginRouter;