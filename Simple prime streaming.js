//https://www.codewars.com/kata/5a908da30025e995880000e3/train/javascript
function solve(a,b){
    let s = '';
    let divCount;
    for (let i = 2; s.length <= a + 1 + b; i++) {
        divCount = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                divCount++;
                break;
            }
        }
        if (divCount === 0) {
            s += i;
        }
    }
    return s.split('').filter((el, i) => i >= a && i < a + b).join('');
}