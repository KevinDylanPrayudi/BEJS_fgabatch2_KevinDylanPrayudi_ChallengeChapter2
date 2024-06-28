import tambahSaldo from "./utility/operations/deposit.js"
import kurangiSaldo from "./utility/operations/withdraw.js"
class BankAccount {
    _balance
    constructor(startingBalance) {
        this._balance = startingBalance;
    }

    deposit(amount) {
        this._balance = tambahSaldo(this._balance, amount);
        return this._balance
    }

    withdraw(amount) {
        this._balance = kurangiSaldo(this._balance, amount);
        return this._balance
    }

    getBalance() {
        return this._balance
    }
}

export default BankAccount