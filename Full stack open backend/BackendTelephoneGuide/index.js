const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(express.json());

morgan.token("body", req => JSON.stringify(req.body));
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :body"));

let persons = [
  {
    id: 1,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 2,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 3,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
  {
    id: 4,
    name: "Sergio",
    number: "21345",
  },
  {
    id: 5,
    name: "Ikki",
    number: "21345",
  },
];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((item) => item.id === id);
  person ? response.json(person) : response.status(404).end();
});

app.get("/info", (request, response) => {
  const date = new Date();
  response.send(`
  <p>Phonebook has info for ${persons.length} people</p>
  <p>${date}</p>
  `);
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  const existingName = persons.find((item) => item.name === body.name);
  if (!body.name || !body.number)
    return response.status(400).json({ error: "error missing" });

  if (existingName)
    return response.status(400).json({ error: `${body.name} alerady exist` });

  const person = {
    id: getRandomInt(1000),
    name: body.name,
    number: body.number,
  };

  persons.concat(person);
  response.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((item) => item.id !== id);
  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT);
