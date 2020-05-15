//https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript
function numObj(s){
    let arrayFromObjects = [];
    for (let i in s) {
        let obj = {};
        obj[s[i]+''] = String.fromCodePoint(s[i])
        arrayFromObjects.push(obj);
    }
    return arrayFromObjects;
}