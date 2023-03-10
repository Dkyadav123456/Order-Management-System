const mongoose = require("mongoose");

//*****************************[User Model Creation]******************************//
const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      trim: true,
    },

    lname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
  },
  { timestamps: true }
);

//*********************[πConnection Creation & export modelπ]******************//
module.exports = mongoose.model("User", userSchema);

//ππππππππ[Thank You Mr Dkyadav User-Schema End]πππππππππ//
