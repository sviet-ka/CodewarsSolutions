// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/javascript
multiplicationTable = function(size) {
    const arr = [];

    for (let i = 1; i <= size;i++) {
        const newArr = [];
        arr.push(newArr);
        for (let j = 1; j <= size; j++) {
            newArr.push(i * j)
        }
    }
    return arr;
}