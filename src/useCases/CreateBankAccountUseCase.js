import BankAccountEntity from "./../entities/BankAccountEntity.js"

const CreateBankAccountUseCase = (id, balance, owner) => {
    const bankAccount = new BankAccountEntity(id, balance, owner)
    return bankAccount
}