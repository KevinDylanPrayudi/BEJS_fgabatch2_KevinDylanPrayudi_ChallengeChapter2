export default class CustomError extends Error {
    constructor(errCode, message) {
        super(message);
        this.code = errCode;
    }
}