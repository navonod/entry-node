
Tx = class Tx {
	constructor(description, fromAccount, toAccount, amount) {

		this.description = description;
		
		if (!fromAccount || typeof fromAccount != 'object') throw new TypeError('fromAccount required');
		this.fromAccount = fromAccount;

		if (!toAccount || typeof toAccount != 'object') throw TypeError('toAccount required');
		this.toAccount = toAccount;

		if (typeof amount != 'number') throw new TypeError("amount Error");
		this.amount = amount;
	}    

	execute() {
		if (this.date) throw new TxError('Cannot Execute Transaction Twice');
		this.fromAccount.debit(this.amount);
		this.toAccount.credit(this.amount);
		this.date = new Date();
		return this;
	}

	static dummy() {
		var fromAccount = new Account('From Account', 400);
		var toAccount = new Account('To Account', 500);
		return new Tx("Text Tx", fromAccount, toAccount, 300);
	}
}

TxError = class TxError extends Error {}

module.exports = {
	Tx,
	TxError
}