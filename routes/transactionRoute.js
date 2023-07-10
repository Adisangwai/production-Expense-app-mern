//to create router
const express=require("express");
//to use addTransaction ans getAllTransactions functions
const { addTransaction, getAllTransactions, editTransaction, deleteTransaction } = require("../controllers/transactionController");


//router object
const router = express.Router();

//routers

//POST || ADD TRANSACTION
router.post('/add-transaction',addTransaction);

//POST || GET ALL TRANSACTIONS
router.post('/get-transactions',getAllTransactions);

//POST || EDIT TRANSACTION
router.post('/edit-transaction',editTransaction);

//POST || DELETE TRANSACTION
router.post('/delete-transaction',deleteTransaction);

//export router so other modules can use it
module.exports = router;