// const mongoose = require("mongoose");
// const { Schema, model } = mongoose;
// const Plant = require("./Plant ");

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: [true, "Password is required."],
    trim: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, "Phone number is required."],
    trim: true,
  },
  avatar: {
    type: String,
    default:
      "https://i.pinimg.com/originals/55/2c/c0/552cc033eca6ec4b289a96777e078954.jpg",
  },// const mongoose = require("mongoose");
// const { Schema, model } = mongoose;
// const Plant = require("./Plant ");

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  // Username provided by users during signup
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
    trim: true,
  },
  // Email provided by users during signup
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    unique: true,
    lowercase: true,
    trim: true,
  },
  // Password provided by users during signup
  passwordHash: {
    type: String,
    required: [true, "Password is required."],
    trim: true,
  },
  // Phonenumber provided by users during signup
  phoneNumber: {
    type: Number,
    required: [true, "Phone number is required."],
    trim: true,
  },
  // User avatar provided by users during signup
  avatar: {
    type: String,
    default:
      "https://i.pinimg.com/originals/55/2c/c0/552cc033eca6ec4b289a96777e078954.jpg",
  },
});

module.exports = model("User", userSchema);

});

module.exports = model("User", userSchema);
