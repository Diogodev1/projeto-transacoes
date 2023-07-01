import CreateBankAccountUseCase from "../useCases/CreateBankAccountUseCase.js"
import BankAccountModel from "../models/BankAccountModel.js"

export const CreateBankAccountService = async (req, res) => {
    const data = {
        balance: req.body.balance,
        owner: req.body.owner
    }

    const BankAccount = CreateBankAccountUseCase(1, data.balance, data.owner)

    const newBankAccount = new BankAccountModel(BankAccount.balance, BankAccount.owner)

    await newBankAccount.save()

    res.send(newBankAccount)
}

export const GetAllBankAccountsService = async (req,res) => {
    const bankAccount = await BankAccountModel.find()

    res.send(bankAccount)
}