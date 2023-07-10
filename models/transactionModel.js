//for db functionalities
const mongoose = require("mongoose");

//schema design for transaction (can be changed when required)
const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    category: {
      type: String,
      requires: [true, "category is required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
    },
  },
  { timestamps: true }
);

//create a model "transactions" having schema as transactionsSchema mentioned above
const transactionModel = mongoose.model("transactions", transactionSchema);

//export transactionModel so other modules can use it
module.exports = transactionModel;

