
Tx = class Tx {
	constructor(date, description, fromAccount, toAccount, amount) {

		if (typeof date != 'object') throw new TypeError("date Error");
		this.date = date;

		this.description = description;
		
		if (!fromAccount || typeof fromAccount != 'object') throw new TypeError('fromAccount required');
		this.fromAccount = fromAccount;

		if (!toAccount || typeof toAccount != 'object') throw TypeError('toAccount required');
		this.toAccount = toAccount;

		if (typeof amount != 'number') throw new TypeError("amount Error");
		this.amount = amount;
	}    

	add(num1, num2) {
		return num1 + num2;
	}
}



module.exports = {
	Tx
}