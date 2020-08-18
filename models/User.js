const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  // Username provided by users during signup
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
    trim: true,
  },
  // Password provided by users during signup
  passwordHash: {
    type: String,
    required: [true, "Password is required."],
    trim: true,
  },
  // Phonenumber provided by users during signup
  //-=-=-=-=-=-=-=-=-ISSUES WITH PHONE NUMBER REQUIERD
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
