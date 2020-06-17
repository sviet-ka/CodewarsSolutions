//https://www.codewars.com/kata/52840d2b27e9c932ff0016ae/train/javascript
function locate(arr, value) {
    return Array.isArray(arr)
        ? arr.some(el => locate(el, value))
        : arr === value;
}