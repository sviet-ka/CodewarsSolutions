//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
function narcissistic(value) {
    const valueDigits = value.toString().split('');
    const power = valueDigits.length;
    return valueDigits.reduce((acc, cur) => acc + Math.pow(cur, power), 0) === value;
}