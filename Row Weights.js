//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
function rowWeights(array){
    const array1 = array.filter((el, i) => i % 2 !== 0).reduce((acc, cur) => acc + cur, 0);
    const array2 = array.filter((el, i) => i % 2 === 0).reduce((acc, cur) => acc + cur, 0);
    return [array2, array1];
}