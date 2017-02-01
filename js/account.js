Account = class Account {
    constructor(name, balance, txs) {
        this.name = name;
        this.balance = balance || 0;
        this.txs = txs || [];
    }

	credit(amount) {
		this.balance += amount;
	}

	debit(amount) {
		this.balance -= amount;
	}

}

module.exports = {
    Account
}