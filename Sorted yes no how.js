//https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript
function isSortedAndHow(array) {
    const ascArr = array.slice().sort((a,b) => a - b);
    const descArr = array.slice().sort((a,b) => b - a);
    if (array.every((el, i) => el === ascArr[i])) {
        return "yes, ascending";
    } else if (array.every((el, i) => el === descArr[i])) {
        return "yes, descending";
    } else {
        return "no";
    }
}