import mongoose from "mongoose";

const BankAccountModel = new mongoose.model("BankAccount", {
    balance: Number,
    owner: String
})

export default BankAccountModel