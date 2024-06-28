import BankAccount from "./bank_account.js";
import queries from "./utility/input/queries.js";
import validation from "./utility/validations/validation.js";
import error400 from "./utility/error-handling/400.js"


class BankingSystem extends BankAccount {
    constructor(balance) {
        if (balance === null) return super(+balance)
        try {
            validation([
                { errcode: 100, value: true, operator: "===", desiredValue: `isNaN(${+balance})`, message: "Please enter number instead of string" },
                { errcode: 101, value: +balance, operator: "<", desiredValue: 1, message: "Please enter positive number" }
            ])
            super(+balance);
        } catch (error) {
            alert(error.message)
            return new BankingSystem(queries("Enter starting balance"))
        }
    }

    deposit(fn, typeOperation) {
        if (typeOperation !== "deposit") return
        let amount = fn("Enter amount to deposit")
        console.log(`this is ${amount} of deposit`)
        if (amount === null) return
        try {
            validation([
                { errcode: 200, value: true, operator: "===", desiredValue: `isNaN(${+amount})`, message: "Please enter number instead of string" },
                { errcode: 201, value: +amount, operator: "<", desiredValue: 1, message: "Please enter positive number" }
            ])
            super.deposit(+amount);
        } catch (err) {
            alert(err.message)
            return this.deposit(queries, typeOperation)
        }
    }

    withdraw(fn, typeOperation) {
        if (typeOperation !== "withdraw") return
        let amount = fn("Enter amount to withdraw")
        if (amount === null) return
        try {
            validation([
                { errcode: 300, value: true, operator: "===", desiredValue: `isNaN(${+amount})`, message: "Please enter number instead of string" },
                { errcode: 301, value: +amount, operator: "<", desiredValue: 1, message: "Please enter positive number" },
                { errcode: 302, value: +amount, operator: ">", desiredValue: this._balance, message: "You don't have enough money in your account. Your balance is " + this._balance }
            ])
            super.withdraw(amount)
            return this._balance
        } catch (err) {
            alert(err.message)
            return this.withdraw(queries, typeOperation)
        }
    }

    getBalance(typeOperation) {
        if (typeOperation !== "balance") return;
        return new Promise((resolve) => setTimeout(() => {
            resolve(alert(`Your balance is ${(super.getBalance() === undefined) ? 0 : super.getBalance()}.`))
        }, 1000))
    }
}


async function init(startingBalance, typeOperation) {
    let saldo = startingBalance;
    try {
        if (!(saldo instanceof BankingSystem)) saldo = new BankingSystem(saldo);
        validation([
            { errcode: 400, value: `${typeOperation == null} && ${saldo._balance === 0}`, operator: "===", desiredValue: true, message: "Please enter 'start', 'deposit', 'withdraw', or 'stop'. check validation" },
            { errcode: 401, value: `${typeOperation == null} && ${saldo._balance !== 0}`, operator: "===", desiredValue: true, message: "Please enter 'deposit', 'withdraw', or 'stop'. check validation" }
        ])
        if (!typeOperation) typeOperation = queries("Enter another operation: deposit, withdraw, balance, or stop") || "stop"
        if (typeOperation === "stop") return
        saldo.deposit(queries, typeOperation)
        saldo.withdraw(queries, typeOperation)
        await saldo.getBalance(typeOperation)
        return init(saldo, queries("Enter another operation: deposit, withdraw, balance, or stop")|| "stop")
    } catch (err) {
        alert(err.message)
        error400(err, saldo, init)
    }
}

init(queries("Enter starting balance"), null)