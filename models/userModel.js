//for db functionalities
const mongoose = require("mongoose");

//schema design for user (can be changed when required)
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required and should be unique"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true }
);

//create a model "users" having schema as userSchema mentioned above
const userModel = mongoose.model("users", userSchema);

//export userModel so other modules can use it
module.exports = userModel;
