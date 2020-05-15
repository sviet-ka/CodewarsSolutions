//https://www.codewars.com/kata/596776fbb4f24d0d82000141/train/javascript
function f(x, cc) {
    const array = [];
    for (let key in cc) {
        array.push(cc[key])
    }
    const i = array.indexOf(x)
    return (i === array.length - 1) ? array[0] : array[i + 1];
}