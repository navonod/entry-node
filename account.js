Account = class Account {
    constructor(name, balance, txs) {
        this.name = name;
        this.balance = balance || 0;
        this.txs = txs || [];
    }
}

module.exports = {
    Account
}