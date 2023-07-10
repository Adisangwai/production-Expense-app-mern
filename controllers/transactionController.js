//import transactionModel to interact with db
const transactionModel = require("../models/transactionModel");
//import moment
const moment = require("moment");

//add a transaction to db using data in req from frontend
const addTransaction = async (req, res) => {
  try {
    //create a transaction object using req.body
    const newTransaction = new transactionModel(req.body);
    //save the transaction in db
    await newTransaction.save();
    //if saved successfully , then send response with status code 201 and "transaction created"
    res.status(201).send("Transaction Created");
  } catch (error) {
    //print error on console
    console.log(error);
    // response with status code 500 and send error in json
    res.status(500).json(error);
  }
};

//get all transactions of a user with userid=req.body.userid
const getAllTransactions = async (req, res) => {
  try {
    //to decide filter
    const { frequency, selectedDates, type } = req.body;
    //store all transactions in "transactions" with userid as filter
    const transactions = await transactionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDates[0],
              $lte: selectedDates[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== "all" && {type}),
    });
    //if successfully got , then send status code 200 and transactions in json as response
    res.status(200).json(transactions);
  } catch (error) {
    //print error on console
    console.log(error);
    //send error status code 500 ans errorn in json
    res.status(500).json(error);
  }
};


//delete transaction with given id
const deleteTransaction = async (req, res) => {
  try {
    
    await transactionModel.findOneAndDelete({ _id: req.body.transacationId });
    res.status(200).send("Transaction Deleted!");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
//update transaction with given id with new data as req.body.payload
const editTransaction = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate(
      { _id: req.body.transacationId },
      req.body.payload
    );
    res.status(200).send("Edit Successfull");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//export functions so that other modules can use it
module.exports = { addTransaction, getAllTransactions , deleteTransaction , editTransaction };
