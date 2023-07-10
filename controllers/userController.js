//import userModel to interact with db
const userModel = require("../models/userModel");

//login callback
const loginController = async (req, res) => {
  try {
    //destructure email and password from req.body
    const { email, password } = req.body;
    //find user object in db with given email and password
    const user = await userModel.findOne({ email, password });
    //if user not found i.e. user is null then send 404 error response
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    //else return 200 success code and return user
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    //if error occurs then , return 400 error status code and error
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//register callback
const registerController = async (req, res) => {
  try {
    //create a useModel object newUser from req.body
    const newUser = new userModel(req.body);
    //save newUser in db
    await newUser.save();
    //if successful then , send success status code 201 and newUser
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
     //if error occurs then , return 400 error status code and error
    res.status(400).json({
      success: false,
      error,
    });
  }
};
//export loginController and registerController functions so that other modules can use it
module.exports = { loginController, registerController };
