// Prepared by:
// Name: Rishabh Singh
// R Id: 51078
// // Activity 18: OOP 3

class Account {
    constructor(balance) {
        this._balance = balance;
    }
    deposit(amount) {
        this._balance += amount;
    }
    showBalance() {
        console.log("Balance:", this._balance);
    }
}

let acc = new Account(1000);
acc.deposit(500);
acc.showBalance();
