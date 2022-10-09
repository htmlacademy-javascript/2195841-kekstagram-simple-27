let getRandomNumber = function(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}
    
let isValidLength = function(value, maxLength) {
    if (!value) {
        return false;
    }
    return value.length <= maxLength;
}