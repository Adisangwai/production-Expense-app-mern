//to create router
const express=require("express");
//to use loginController and registerController functions
const { loginController, registerController } = require("../controllers/userController");

//router object
const router = express.Router();

//routers

//POST || LOGIN USER
router.post('/login',loginController);

//POST || REGISTER USER
router.post('/register',registerController);


//export router so other modules can use it
module.exports = router;