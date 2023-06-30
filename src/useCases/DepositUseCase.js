const DepositUseCase = (bankAccount, value) => {
    bankAccount.addToBalance(value)
}

export default DepositUseCase