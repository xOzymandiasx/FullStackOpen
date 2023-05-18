const mongoose = require("mongoose");
const superTest = require("supertest");
const app = require("../app");
const Note = require("../models/note");

const api = superTest(app); //No hace falta realizar la conección de la app, supertes se encarga de eso

const initialNotes = [
  {
    content: 'HTML is Easy',
    date: new Date(),
    important: false,
  },
  {
    content: 'Browser can execute only Javascript',
    date: new Date(),
    important: true,
  },
];

beforeEach(async () => {
  await Note.deleteMany({});
  let noteObject = new Note(initialNotes[0]);
  await noteObject.save();
  noteObject = new Note(initialNotes[1]);
  await noteObject.save();
}); //Modifica la base de datos antes de realizarse los tests.

test("Notes are returned as Json", async () => {
  await api
    .get("/api/notes")
    .expect(200) //Métodos de supertest
    .expect("Content-Type", /application\/json/);
}, 100000); //Para que tenga limite de espera

test("There are two notes", async() => {
  const response = await api.get("/api/notes");
  expect(response.body).toHaveLength(initialNotes.length);
});

test("The first note is about HTTP methods", async() => {
  const response = await api.get("/api/notes");
  const content = response.body.map(item => item.content);
  expect(content).toContain("Browser can execute only Javascript");
});

afterAll(() => {
  mongoose.connection.close();
});
