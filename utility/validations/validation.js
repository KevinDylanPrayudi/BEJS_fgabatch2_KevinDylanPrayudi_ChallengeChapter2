import CustomError from "../Error/CustomError.js";

export default function validation(params) {
    let val, errcode, message, desiredValue, operator;
    for(let i = 0; i < params.length; i++) {
        for(let [key, value] of Object.entries(params[i])) {
            if(key === "value") val = value
            if(key === "errcode") errcode = value
            if(key === "message") message = value
            if(key === "desiredValue") desiredValue = value
            if(key === "operator") operator = value
            if((val || val === 0) && key && message && desiredValue) {
                if(eval(`${val} ${operator} ${desiredValue}`)) {
                    throw new CustomError(errcode, message)
                }
            }
        }
        val = null, errcode = null, message = null, desiredValue = null
    }
}