const mongoose = require("mongoose");
const superTest = require("supertest");
const app = require("../app");
const helper = require("./test_helper");
const {initialNotes, nonExistingId, notesInDb, usersInDb} = helper;
const bcrypt = require("bcrypt");
const Note = require("../models/note");
const User = require("../models/users");


const api = superTest(app); //No hace falta realizar la conección de la app, supertest se encarga de eso

// beforeEach(async () => {
//   await Note.deleteMany({});
//   console.log("Cleared");

//   for (let note of initialNotes) {
//     const noteObject = new Note(note)
//     await noteObject.save();
//   };

//   // const noteObjects = initialNotes.map(item => new Note(item));
//   // const promiseArray = noteObjects.map(item => item.save());
//   // await Promise.all(promiseArray); // la función asincrona beforEach no espera la ejecuccion de otras operaciones asincronas, a menos que realicemos el siguiete metodo.

//   // let noteObject = new Note(initialNotes[0]);
//   // await noteObject.save();

//   // noteObject = new Note(initialNotes[1]);
//   // await noteObject.save();
// }); //Modifica la base de datos antes de realizarse los tests.

describe('when there is initially some notes saved', () => {
test("Notes are returned as Json", async () => {
  await api
    .get("/api/notes")
    .expect(200) //Métodos de supertest
    .expect("Content-Type", /application\/json/);
}, 100000); //Para que tenga limite de espera

test('all notes are returned', async () => {
  const response = await api.get('/api/notes')

  expect(response.body).toHaveLength(initialNotes.length)
});

test('a specific note is within the returned notes', async () => {
  const response = await api.get('/api/notes')

  const contents = response.body.map(r => r.content)

  expect(contents).toContain('Browser can execute only Javascript')
});

});

describe('viewing a specific note', () => {

  test('succeeds with a valid id', async () => {
    const notesAtStart = await helper.notesInDb()

    const noteToView = notesAtStart[0]

    const resultNote = await api
      .get(`/api/notes/${noteToView.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
      
    const processedNoteToView = JSON.parse(JSON.stringify(noteToView))

    expect(resultNote.body).toEqual(processedNoteToView)
  });

  test('fails with statuscode 404 if note does not exist', async () => {
    const validNonexistingId = 5555;

    console.log(validNonexistingId)

    await api
      .get(`/api/notes/${validNonexistingId}`)
      .expect(404)
  });

});

describe("Addition of a new note", ()=> {

  test("Succeeds with valid data", async () => {
    const newNote = {
      content: "async/await simplifies making async calls",
      important: true,
    };
  
    await api
      .post("/api/notes")
      .send(newNote)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  
    const notesAtEnd = await notesInDb();
    console.log(notesAtEnd)
    expect(notesAtEnd).toHaveLength(notesAtEnd.length);
  
    const contents = notesAtEnd.map(item => item.content);
    expect(contents).toContain("async/await simplifies making async calls");
  });

  test("Fails with status code 400 if data invalid", async () => {
    const newNote = {
      important: true
    };
  
    await api
      .post("/api/notes")
      .send(newNote)
      .expect(400);
  
      const notesAtEnd = await notesInDb();
      expect(notesAtEnd).toHaveLength(notesAtEnd.length);
  });
});

describe("Deletion of a note", ()=> {

  test("succeeds with status code 204 if id is valid", async () => {
    const notesAtStart = await notesInDb();
    const noteToDelte = notesAtStart[0];
  
    await api
     .delete(`/api/notes/${noteToDelte.id}`)
     .expect(204)
  
    const notesAtEnd = await notesInDb();
    expect(notesAtEnd).toHaveLength(initialNotes.length - 1);
  
    const contents = notesAtEnd.map(item => item.content);
    expect(contents).not.toContain(noteToDelte.content);
  });
});

describe("when there is initially one user in db", ()=> {
  beforeEach(async () => {
    await User.deleteMany({});

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
  });

  test('creation succeeds with a fresh username', async() => { 
    const usersAtStart = await usersInDb();

    const newUser = {
      username: "Roquefort",
      name: "Sao",
      password: "rararar"
    };

    await api
     .post("/api/users")
     .send(newUser)
     .expect(200)
     .expect("Content-Type", /application\/json/);

    const usersAtTheEnd = await usersInDb();
    expect(usersAtTheEnd).toHaveLength(usersAtStart.length + 1);
    
    const usernames = usersAtTheEnd.map(item => item.username);
    expect(usernames).toContain(newUser.username);
   });
});

test("There are two notes", async () => {
  const response = await api.get("/api/notes");
  expect(response.body).toHaveLength(initialNotes.length);
});

test("The first note is about HTTP methods", async () => {
  const response = await api.get("/api/notes");
  const content = response.body.map((item) => item.content);
  expect(content).toContain("Browser can execute only Javascript");
});

test("A specific note can be viewed", async () => {
  const notesAtStart = await notesInDb();

  const noteToView = notesAtStart[0];

  const resultNote = await api
   .get(`/api/notes/${noteToView.id}`)
   .expect(200)
   .expect("Content-Type", /application\/json/);

   const processedNoteToView = JSON.parse(JSON.stringify(noteToView));

   expect(resultNote.body).toEqual(processedNoteToView);
});

afterAll(() => {
  mongoose.connection.close();
});
