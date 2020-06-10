// https://www.codewars.com/kata/5edc8c53d7cede0032eb6029/solutions/javascript
function solve(n){
    let res = -1;
    for (let i = 1; Math.pow(i, 2) <= Math.pow(n, 2); i++) {
        if (Math.sqrt((Math.pow(i, 2) + n)) % 1 === 0) {
            res = Math.pow(i, 2);
            break;
        }
    }
    return res;
}