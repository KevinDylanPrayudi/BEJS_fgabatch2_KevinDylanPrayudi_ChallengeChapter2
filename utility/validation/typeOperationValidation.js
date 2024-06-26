import CustomError from "../Error/CustomError.js";

export default function typeOperationIsValid(deposit, typeOperation) {
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