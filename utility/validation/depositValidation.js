import CustomError from "../Error/CustomError.js";
export default function depositIsValid(deposit) {
    if (isNaN(deposit) || deposit < 0) {
        throw new CustomError(100, "Please enter a number or a positive number")
    }
}