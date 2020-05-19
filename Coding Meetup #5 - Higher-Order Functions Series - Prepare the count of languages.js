//https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript
function countLanguages(list) {
    const obj = {};
    for (let i in list) {
        if (!obj[list[i].language]) {
            obj[list[i].language] = 1;
        } else {
            obj[list[i].language] += 1;
        }
    }
    return obj;
}