class BankAccount {
    static define(startingBalance) {
        return this.balance = startingBalance || 0
    }
    static deposit(amount) {
        this.balance = tambahSaldo(this.balance, amount)
        return this.balance
    }
    static withdraw(amount) {
        this.balance = kurangiSaldo(this.balance, amount)
        return this.balance
    }
    
    static getBalance() {
        return this.balance
    }
}

function init(startingBalance, typeOperation) {
    let saldo = startingBalance;
    if (isNaN(saldo) || saldo < 0) {
        alert("Please enter a number or a positive number")
        return init(queries("Enter starting balance", 1), typeOperation)
    }
    if (!typeOperation) {
        if(saldo) {
            typeOperation = queries("Enter another operation: deposit, withdraw, balance, or stop")
        } else {
            typeOperation = queries("Enter another operation: start deposit(start), deposit, withdraw, or stop")
        }
        if (typeOperation === "start") {
            return init(queries("Enter starting balance", 1), "")
        }
    }
    saldo = BankAccount.define(saldo)
    if (!saldo) {
        return alert(`Your balance is ${saldo}.`)
    }
    if (typeOperation === "stop" || !typeOperation) { return }
    else if (typeOperation === "deposit") {
        let deposit = queries("Enter amount to deposit", 1)
        if (isNaN(deposit) || deposit < 0) {
            alert("Please enter a number or a positive number")
            return init(saldo, typeOperation)
        }
        saldo = BankAccount.deposit(deposit)
    } else if (typeOperation === "withdraw") {
        let withdraw = queries("Enter amount to withdraw", 1)
        if (isNaN(withdraw) || withdraw < 0 || withdraw > saldo) {
            alert(`Please enter a number, a positive number, or a number lesser than your balance. Your balance is ${saldo}.`)
            return init(saldo, typeOperation)
        }
        saldo = BankAccount.withdraw(withdraw)
    } else if(typeOperation === "balance") {
        saldo = BankAccount.getBalance()
        alert(`Your balance is ${saldo}.`)
    }
    
    else {
        alert("Please enter 'deposit', 'withdraw', or 'stop'.")
        return init(saldo, queries("Enter another operation: deposit, withdraw, or stop"))
    }
    typeOperation = queries("Enter another operation: deposit, withdraw, balance, or stop")
    return init(saldo, typeOperation)
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