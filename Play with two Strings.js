//https://www.codewars.com/kata/56c30ad8585d9ab99b000c54/train/javascript
function createObject (str) {
    const obj = {};
    for (let c of str.toLowerCase()) {
        obj[c] = (obj[c] || 0) + 1;
    }
    return obj;
}

function swapString(str, obj) {
    let result = '';
    for (let c of str) {
        if (c in obj
            && obj[c] % 2 !== 0
            && c === c.toLowerCase()) {
            result += c.toUpperCase();
        } else if ((c in obj || c.toLowerCase() in obj)
            && obj[c.toLowerCase()] % 2 !== 0
            && c === c.toUpperCase()) {
            result += c.toLowerCase();
        } else {
            result += c;
        }
    }
    return result;
}

function workOnStrings(a, b) {
    const objA = createObject(a);
    const objB = createObject(b);
    console.log(objA, objB)
    const strA = swapString(a,objB);
    const strB = swapString(b,objA);
    console.log(strA, strB)

    return strA + strB;
}