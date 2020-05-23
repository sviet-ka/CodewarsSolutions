//https://www.codewars.com/kata/5276c18121e20900c0000235/train/javascript
function findNumber(array) {
    console.log(array)
    let sum = 0;
    let actualSum = 0;
    for (let i = 0; i <= array.length; i++) {
        sum += (i + 1);
        if (i === array.length) {
            continue;
        } else {
            actualSum += array[i];
        }
    }
    return sum - actualSum;
}