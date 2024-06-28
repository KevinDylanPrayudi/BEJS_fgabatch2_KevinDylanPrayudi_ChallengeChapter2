import queries from "../input/queries.js"

export default function error400(err, saldo, fn) {
    if (err.code === 401) {
        return fn(saldo, queries("Enter another operation: deposit, withdraw, balance, or stop") || "stop")
    } else if (err.code === 400) {
        if (queries("Enter another operation: start deposit(start), deposit, withdraw, or stop") === "start") return fn(queries("Enter starting balance", 1), "")

    }
}