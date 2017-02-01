var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('chai').assert;
var sinon = require('sinon');

require('../account.js');
require('../tx.js');

describe('Account', function() {
	describe('#constructor', function() {
		it(`should initialise to a zero balance default & empty tx array`, function() {
			account = new Account("MyAccount");
			expect(account.balance).to.equal(0);
			assert(account.txs.length == 0);
		});
	});

	describe('#constructor', function() {
		it(`should initialise to a zero balance default & empty tx array- i made a change`, function() {
			account = new Account("MyAccount");
			expect(account.balance).to.equal(0);
			assert(account.txs.length == 0);
		});
	});
	
	describe('#credit', function() {
		it(`should add a given amount to the current balance`, function() {
			account = new Account("MyAccount", 200);
			account.credit(100);
			assert(account.balance === 300, 'Crebit test fails');
		})
	})

	describe('#debit', function() {
		it(`should subtract a given amount to the current balance`, function() {
			account = new Account("MyAccount", 200);
			account.debit(100);
			assert(account.balance === 100, 'Debit test fails');
		})
	})

});

describe('Tx', function() {
	describe('#constructor', function() {

		it(`should fail when not passed accounts`, function() {
			var error = null;
			try {
				tx = new Tx(new Date(), "dummy description", "MyAccount", "MyAccount", 400);
			} catch(e) {
				error = e
			}
			assert(error.message === "fromAccount required")
		});

		it(`should fail when amount is not a number`, function() {
			var error = null;
			try {
				tx = new Tx("dummy description", new Account("MyAccount1"), new Account("MyAccount2"), "bad number");
			} catch(e) {
				error = e
			}
			assert(error.message === "amount Error")
		});

		it(`should create a dummy Tx when called to do so`, function() {
			var tx = Tx.dummy();
			assert(tx.description)
			assert(tx.fromAccount)
			assert(tx.toAccount)
			assert(tx.amount)
		});

		let executedTx = function() {
			let tx = Tx.dummy();
			let originalFromBalance = tx.fromAccount.balance;
			let originalToBalance = tx.toAccount.balance;

			assert(!tx.date);
			assert(tx.fromAccount.txs.length === 0)
			assert(tx.toAccount.txs.length === 0)

			// perform the execution
			tx = tx.execute();

			assert(tx.date);
			assert(tx.fromAccount.balance === (originalFromBalance - tx.amount))
			assert(tx.toAccount.balance === (originalToBalance + tx.amount))

			return tx;
		}

		it(`should execute a tx, by: 
			 - crediting toAccount
			 - debiting fromAccount
			 - setting an executeDate`, 
			 executedTx
		)

		it(`should never execute a tx with a date (i.e. execute twice)`, function() {
			let tx = executedTx();
			let error = null;
			try {
				tx.execute()
			} catch(e) {
				error = e
			}
			assert(error.message === 'Cannot Execute Transaction Twice')
		})

	})

})