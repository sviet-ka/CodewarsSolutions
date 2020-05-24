//https://www.codewars.com/kata/5245a9138ca049e9a10007b8/train/javascript
function countAdjacentPairs(searchString) {
    const arr = searchString.split(' ').map(el => el.toLowerCase());
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] && arr[i] !== arr[i - 2]) {
            count++;
        }
    }
    return count;
}