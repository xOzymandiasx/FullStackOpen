const notesRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const Note = require("../models/note");
const User = require("../models/users");

const getTokenFrom = request => {
  const authorization = request.get("authorization");
  console.log("Esto es lo que contiene la autorizacion:", authorization);
  if (authorization && authorization.toLowerCase().startsWith("bearer")) return authorization.substring(7);
  //Aisla el token del encabezado "authorization";
  return null;
};

notesRouter.get("/", async (request, response) => {
  const notes = await Note.find({}).populate("user", { username: 1, name: 1 });
  response.status(200).json(notes);
  // Note.find({}).then((res) => {
  //   response.status(200).json(res);
  // });
});

notesRouter.get("/:id", async (request, response, next) => {
  try {
    const noteToFind = await Note.findById(request.params.id);
    response.status(200).json(noteToFind);
  } catch(error) {
    next(error);
  };
  // Note.findById(request.params.id)
  //  .then(res => res ? response.status(200).json(res) : response.status(404).end())
  //  .catch(error => next(error));
  //  .catch(error => {
  //   console.log(error);
  //   response.status(400).send({error: "Malformated id"});
  //  });
  // const id = Number(request.params.id);
  // const note = notes.find((item) => item.id === id);
  // note ? response.json(note) : response.status(404).end();
});

notesRouter.post("/", async (request, response, next) => {
  const {body} = request;
  if (body.content === undefined) {
    return response.status(400).json({
      error: "error missing",
    });
  };

  const token = getTokenFrom(request); //Toma el token del usuario desde el navegador del cual se logeo;
  const decodedToken = jwt.verify(token, process.env.SECRET); //Verifica el token recibido con el token almacenado;
  if (!token || !decodedToken.id) return response.status(401).json({error: "token missing or invalid"});
  // const note = {
  //   content: body.content,
  //   important: body.important || false,
  //   date: new Date(),
  //   id: generateId(),
  // };

  // notes.concat(note);
  // response.json(note);

  const user = await User.findById(decodedToken.id); //Toma los datos directamente de lo recibido de la llamada al token;

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
    user: user._id
  });

  try {
    const savedNote = await note.save()
    user.notes = user.notes.concat(savedNote._id);
    await user.save();
    response.json(savedNote);
  } catch(exception){
    next(exception)
  };

  // note.save()
  //  .then((res) => response.json(res.toJSON()))
  //  .catch(error => next(error));
});

notesRouter.put("/:id", (request, response, next) => {
  const { body } = request;

  const note = {
    content: body.content,
    important: body.important
  };

  Note.findByIdAndUpdate(request.params.id, note, {new: true})
   .then(res => response.status(200).json(res))
   .catch(error => next(error))

  // notes = notes.map((item) => (item.id === body.id ? body : item));
  // response.status(200).json(body);
});

notesRouter.delete("/:id", async (request, response, next) => {

  try {
    await Note.findByIdAndRemove(request.params.id);
    response.status(204).end();
  } catch(error) {
    next(error);
  };
  // Note.findByIdAndRemove(request.params.id)
  //  .then(res => response.status(204).end())
  //  .catch(error => next(error));
  // const id = Number(request.params.id);
  // notes = notes.filter((item) => item.id !== id);
  // response.status(204).end();
});

module.exports = notesRouter;