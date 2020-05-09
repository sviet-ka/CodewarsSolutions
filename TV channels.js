//https://www.codewars.com/kata/5836dce6966f8d1d43000007/train/javascript
function redarr(arr) {
    const unique = Array.from(new Set(arr)).sort();
    let res = {};
    for(let i = 0; i < unique.length; i++) {
        res[i] = unique[i];
    }
    return res;
}