var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('chai').assert;
var sinon = require('sinon');

require('./account.js');
require('./tx.js');

describe('Account', function() {
	describe('#constructor', function() {
		it('should initialise to a zero balance default & empty tx array', function() {
			account = new Account("MyAccount");
			expect(account.balance).to.equal(0);
			assert(account.txs.length == 0);
		});
	});
});

describe('Tx', function() {
	describe('#constructor', function() {

		it('should fail when not passed an object as date', function() {
			var txSpy = sinon.spy(Tx.constructor);
			var error = null;
			try {
				tx = new Tx("bad date", "dummy description", new Account("MyAccount1"), new Account("MyAccount2"), 400);
			} catch(e) {
				error = e
			}
			assert(error.message === "date Error")
		});

		it('should fail when not passed accounts', function() {
			var txSpy = sinon.spy(Tx.constructor);
			var error = null;
			try {
				tx = new Tx(new Date(), "dummy description", "MyAccount", "MyAccount", 400);
			} catch(e) {
				error = e
			}
			assert(error.message === "fromAccount required")
		});

		it('should fail when amount is not a number', function() {
			var txSpy = sinon.spy(Tx.constructor);
			var error = null;
			try {
				tx = new Tx(new Date(), "dummy description", new Account("MyAccount1"), new Account("MyAccount2"), "bad number");
			} catch(e) {
				error = e
			}
			assert(error.message === "amount Error")
		});

	})

})