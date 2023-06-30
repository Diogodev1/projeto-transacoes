const TransactionEntity = class {
    constructor(id, value, date, payer, recipient) {
        this.id = id
        this.value = value
        this.date = date
        this.payer = payer
        this.recipient = recipient
    }
}

export default TransactionEntity
