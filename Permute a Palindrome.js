//https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/train/javascript
function permuteAPalindrome (input) {
    const sortedInput = input.split('').sort();
    const singleChars = [];
    let i = 0;
    while  (i < sortedInput.length) {
        if (sortedInput[i] === sortedInput[i + 1]) {
            i+=2;
        } else {
            singleChars.push(sortedInput[i]);
            i++;
        }
    }
    return (singleChars.length <= 1);
}