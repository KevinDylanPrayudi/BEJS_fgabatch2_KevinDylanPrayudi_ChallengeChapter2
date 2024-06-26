import BankAccount from "./bank_account.js";
import queries from "./utility/input/queries.js";
import CustomError from "./utility/Error/CustomError.js";
import depositIsValid from "./utility/validation/depositValidation.js";
import typeOperationIsValid from "./utility/validation/typeOperationValidation.js";


class BankingSystem extends BankAccount {
    constructor(balance) {
        super(balance);
    }

    deposit(fn, typeOperation) {
        if (typeOperation !== "deposit") return
        let amount = fn("Enter amount to deposit", 1)
        try {
            depositIsValid(amount)
            super.deposit(amount);
        } catch (err) {
            alert(err.message)
            return this.deposit(queries, typeOperation)
        }
    }

    withdraw(fn, typeOperation) {
        if (typeOperation !== "withdraw") return
        let amount = fn("Enter amount to withdraw", 1)
        try {
            depositIsValid(amount)
            if (amount > this._balance) throw new CustomError(300, "You don't have enough money in your account. Your balance is " + this._balance)
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
            resolve((super.getBalance() === undefined) ? 0 : super.getBalance())
        }, 1000))
    }
}


async function init(startingBalance, typeOperation) {
    let saldo = startingBalance;
    let balance;
    try {
        depositIsValid(saldo)
        saldo = new BankingSystem(saldo)
        typeOperation = typeOperationIsValid(await saldo.getBalance("balance"), typeOperation)
        if (typeOperation === "stop") return
        saldo.deposit(queries, typeOperation)
        saldo.withdraw(queries, typeOperation)
        balance = await saldo.getBalance(typeOperation)
        if (balance !== undefined) {
            alert(`Your balance is ${balance}.`)
        }
        return init(await saldo.getBalance("balance"), queries("Enter another operation: deposit, withdraw, balance, or stop"))
    } catch (err) {
        alert(err.message)
        if (err.code === 100) {
            return init(queries("Enter starting balance", 1), "")
        } else if (err.code === 201) {
            typeOperation = queries("Enter another operation: deposit, withdraw, balance, or stop")
            if (!typeOperation) return
            return init(await saldo.getBalance("balance"), typeOperation)

        } else if (err.code === 200) {
            typeOperation = queries("Enter another operation: start deposit(start), deposit, withdraw, or stop")
            if (typeOperation === "start") {
                return init(queries("Enter starting balance", 1), "")
            } else {
                return alert(`Your balance is ${await saldo.getBalance("balance")}.`)
            }
        }
    }
}

init(queries("Enter starting balance", 1), "")