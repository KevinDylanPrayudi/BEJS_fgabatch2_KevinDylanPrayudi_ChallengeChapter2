class BankAccount {
    _balance
    constructor(startingBalance) {
        this._balance = startingBalance || 0;
    }

    deposit(fn, typeOperation) {
        if(typeOperation !== "deposit") return
        let amount = fn("Enter amount to deposit", 1)
        depositIsValid(amount)
        this._balance = tambahSaldo(this._balance, amount);
        return this._balance;
    }

    withdraw(fn, typeOperation) {
        if(typeOperation !== "withdraw") return
        let amount = fn("Enter amount to withdraw", 1)
        depositIsValid(amount)
        if(amount > this._balance) throw new CustomError(300, "You don't have enough money in your account.")
        this._balance = kurangiSaldo(this._balance, amount);
        return this._balance
    }

    getBalance(typeOperation) {
        if(typeOperation !== "balance") return
        return this._balance
    }
}

class CustomError extends Error {
    constructor(errCode, message) {
        super(message);
        this.code = errCode;
    }
}

function init(startingBalance, typeOperation) {
    let saldo = startingBalance;
    try {
        depositIsValid(saldo)
        saldo = new BankAccount(saldo)
        typeOperation = typeOperationIsValid(saldo.getBalance("balance"), typeOperation)
        saldo.deposit(queries, typeOperation)
        if(typeOperation === "stop") return
        saldo.withdraw(queries, typeOperation)
        alert(saldo.getBalance("balance"))
    } catch (err) {
        alert(err.message)
        if(err.code === 100) {
            return init(queries("Enter starting balance", 1), typeOperation)
        } else if(err.code === 201) {
            typeOperation = queries("Enter another operation: deposit, withdraw, balance, or stop")
            if(!typeOperation) return
            return init(saldo.getBalance("balance"), )

        } else if(err.code === 200) {
            typeOperation = queries("Enter another operation: start deposit(start), deposit, withdraw, or stop")
            if(typeOperation === "start") {
                return init(queries("Enter starting balance", 1), "")
            } else {
                return alert(`Your balance is ${saldo.getBalance() || 0}.`)
            }
        } else if(err.code === 300) {
            return init(saldo.getBalance("balance"), typeOperation)
        }
    }
}

init(queries("Enter starting balance", 1), "")

function tambahSaldo(balance, deposit) {
    return balance + deposit;
}

function kurangiSaldo(balance, withdraw) {
    return balance - withdraw;
}

function queries(query, typeQuery) {
    let result;
    if (typeQuery) {
        result = +window.prompt(query)
    } else {
        result = window.prompt(query)
    }
    return result
}

function depositIsValid(deposit) {
    if (isNaN(deposit) || deposit < 0) {
        throw new CustomError(100, "Please enter a number or a positive number")
    }
}

function typeOperationIsValid(deposit, typeOperation) {
    if (!typeOperation) {
        if(deposit) {
            throw new CustomError(201, "Please enter 'deposit', 'withdraw', or 'stop'.")
        } else {
            throw new CustomError(200, "Please enter 'start', 'deposit', 'withdraw', or 'stop'.")
        }
    } else {
        return typeOperation
    }
}