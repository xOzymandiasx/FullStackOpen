const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
  username: String,
  name: String,
  passwordHash: String,
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Note'
    }
  ],
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    //el password no puede ser revelado
    delete returnedObject.passwordHash
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;