//https://www.codewars.com/kata/5355a811a93a501adf000ab7/train/javascript
var fizzBuzzCustom = function(stringOne = "Fizz", stringTwo = "Buzz", numOne = 3, numTwo = 5) {
    const arr = [];
    let res = [];
    for (let i = 1; i <= 100; i++) {
        arr.push(i);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % numOne === 0 && arr[i] % numTwo === 0) {
            res.push(stringOne + stringTwo);
        } else if (arr[i] % numOne === 0) {
            res.push(stringOne);
        } else if (arr[i] % numTwo === 0) {
            res.push(stringTwo);
        } else {
            res.push(arr[i]);
        }
    }
    return res;
};