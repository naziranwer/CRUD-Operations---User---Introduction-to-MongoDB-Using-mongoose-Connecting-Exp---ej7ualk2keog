const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  // Implement the user schema fields:
  // name as String and
  // email as a String,
  name: String,
  email: String
});

// Create and export the User model
const User=mongoose.model("user",userSchema);
module.exports=User;