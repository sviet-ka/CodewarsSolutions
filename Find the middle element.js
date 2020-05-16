//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
var gimme = function (inputArray) {
    return inputArray.indexOf(
        +inputArray
            .filter(el =>  el !== Math.min(...inputArray))
            .filter(el => el !== Math.max(...inputArray)))
};