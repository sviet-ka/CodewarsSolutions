//https://www.codewars.com/kata/5946a0a64a2c5b596500019a/train/javascript
function splitAndAdd(arr, n) {
    let newArr = [];
    let result = [...arr];
    let k = 1;
    while (k <= n && result.length > 1) {
        let mid = Math.floor(result.length / 2);
        for (let i = 0; i < mid; i++) {
            newArr.push(result[i] + result[i + mid + result.length % 2])
        }
        if (result.length % 2 !== 0) {
            newArr.unshift(result[mid]);
        }
        result = [...newArr];
        newArr.length = 0;
        k++;
    }
    return result;
}