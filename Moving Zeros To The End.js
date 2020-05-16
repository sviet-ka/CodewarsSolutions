//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
var moveZeros = function (arr) {
    const array = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            array.push(arr[i]);
        } else {
            count++;
        }
    }
    for (let i = 1; i <= count; i++) {
        array.push(0);
    }
    return array;
}