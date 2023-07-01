import mongoose from "mongoose";

const TransactionModel = new mongoose.model("Transaction", {
    value: Number,
    date: Date,
    payer: String,
    recipient: String
})

export default TransactionModel