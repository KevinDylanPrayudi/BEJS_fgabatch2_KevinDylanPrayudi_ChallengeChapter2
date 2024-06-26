export default function queries(query, typeQuery) {
    let result;
    if (typeQuery) {
        result = +window.prompt(query)
    } else {
        result = window.prompt(query)
    }
    return result
}