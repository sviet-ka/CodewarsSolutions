//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers){
    const arr = numbers.split(' ').map(el => +el);
    const min = arr.indexOf(Math.min(...arr));
    const max = arr.indexOf(Math.max(...arr));

    return `${arr[max]} ${arr[min]}`;
}