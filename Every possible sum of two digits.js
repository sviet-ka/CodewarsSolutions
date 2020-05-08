//https://www.codewars.com/kata/5b4e474305f04bea11000148/train/javascript
function digits(num){
    let tempArr = num.toString().split('').map(el => +el);
    let arr = [];
    for (let i = 0; i < tempArr.length; i++) {
        for (let j = i +1; j < tempArr.length; j++) {
            arr.push(tempArr[i] + tempArr[j]);
        }
    }
    return arr;
}