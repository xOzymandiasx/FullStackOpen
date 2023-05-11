const mongoose = require("mongoose");
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

const url = process.env.MONGODB_URI;

console.log("Connecting to", url);

mongoose
  .connect(url)
  .then((res) => console.log("Connected to", url))
  .catch((error) => console.log("error connecting to MongoDB:", error));

//Modelo de persona para la base de datos
const personSchema = new Schema({
  name: {
    type: String,
    minlength: 5,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
    minlength: 5,
    required: true,
  },
});

//Edición del formato recibido de la base de datos para una mejor visualización
personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

//Agregamos un validador de datos, para que no se repitan
personSchema.plugin(uniqueValidator);

//Exportación del modelo de persona
module.exports = mongoose.model("Person", personSchema);
