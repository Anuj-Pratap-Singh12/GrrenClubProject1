const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/greenclub")
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));


const complainSchema = mongoose.Schema({
  email: String,
  image : {
    type: String,
    default : ""
  },
  statement: String,
})

module.exports = mongoose.model('complain',complainSchema)