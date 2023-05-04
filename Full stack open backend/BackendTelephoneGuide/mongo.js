const mongoose = require("mongoose");
const { Schema } = mongoose;

if (process.argv.length < 3) {
  console.log("You forgot write the password");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://caramoon:${password}@pruebas.wj9i7qy.mongodb.net/phoneBook-app?retryWrites=true`;

mongoose.connect(url);

const personSchema = new Schema({
  name: String,
  number: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
});

if (process.argv.length === 3) {
  Person.find({}).then((res) => {
    res.forEach((item) => console.log(item.name, item.number));
    mongoose.connection.close();
  });
}

if (process.argv.length > 3) {
  person.save().then((result) => {
    console.log(`Added ${person.name} number ${person.number} to phonebook`);
    mongoose.connection.close();
  });
};
