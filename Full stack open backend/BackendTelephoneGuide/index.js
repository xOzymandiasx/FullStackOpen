require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const Person = require('./person');
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

morgan.token('body', req => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

// let persons = [
//   {
//     id: 1,
//     name: "Ada Lovelace",
//     number: "39-44-5323523",
//   },
//   {
//     id: 2,
//     name: "Dan Abramov",
//     number: "12-43-234345",
//   },
//   {
//     id: 3,
//     name: "Mary Poppendieck",
//     number: "39-23-6423122",
//   },
//   {
//     id: 4,
//     name: "Sergio",
//     number: "21345",
//   },
//   {
//     id: 5,
//     name: "Ikki",
//     number: "21345",
//   },
// ];

// const getRandomInt = (max) => {
//   return Math.floor(Math.random() * max);
// };

app.get('/api/persons', (request, response) => {
  Person.find({}).then(res => {
    response.status(200).json(res)
    console.log(res)
  });
  // response.json(persons);
});

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
   .then(res => response.json(res))
   .catch(error => next(error));
  // // const id = Number(request.params.id);
  // // const person = persons.find((item) => item.id === id);
  // // person ? response.json(person) : response.status(404).end();
});

app.get('/info', (request, response) => {
  const date = new Date();
  response.send(`
  <p>Phonebook has info for ${persons.length} people</p>
  <p>${date}</p>
  `);
});

app.post('/api/persons', (request, response, next) => {
  const body = request.body;
  if (!body.name || !body.number) return response.status(400).json({ error: 'error missing' });
  // Person.find({name:body.name})
  //  .then(res => {if (res.name === body.name) return response.status(400).json({ error: `${body.name} alerady exist` })});
  // const existingName = persons.find((item) => item.name === body.name);
  // if (existingName) return response.status(400).json({ error: `${body.name} alerady exist` });
   
  const person = new Person ({
    name: body.name,
    number: body.number,
  });

  person.save()
   .then(res => response.status(200).json(res))
   .catch(error => next(error));

  // persons.concat(person);
  // response.status(200).json(person);
});

app.put('/api/persons/:id', (request, response, next) => {
  const {body} = request;
  const person = {
    name: body.name,
    number: body.number
  };

  Person.findByIdAndUpdate(body.id, person, {new: true})
   .then(res => response.status(200).json(res))
   .catch(error => next(error));
});

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
   .then(res => response.status(204).end())
   .catch(error => next(error));
  // const id = Number(request.params.id);
  // persons = persons.filter((item) => item.id !== id);
  // response.status(204).end();
});

const unknowEndpoint = (request, response) => {
  response.status(404).send({error: 'Unknow endpoint'});
};
app.use(unknowEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.name);
  if (error.name === 'CastError') return response.status(400).send({error: 'Malformated id'});
  if (error.name === 'ValidationError') return response.status(400).send({error: error.message})
  next(error);
};
app.use(errorHandler);


const PORT = process.env.PORT;
app.listen(PORT);
