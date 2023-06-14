const mongoose = require("mongoose");
const config = require("../utils/config");
const { mongoUrl } = config;
const { Schema } = mongoose;

mongoose.connect(mongoUrl)
 .then(res => console.log(`Connecting to ${mongoUrl}`))
 .catch(error => console.log(`Error connecting to MongoDb${error.message}`));

const blogScheema = new Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

blogScheema.set("toJSON", {
  transform: (object, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Blog = mongoose.model("Blog", blogScheema);
module.exports = Blog;