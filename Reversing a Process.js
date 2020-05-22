//https://www.codewars.com/kata/5dad6e5264e25a001918a1fc/train/javascript
function decode(r) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const [_, num, codedStr] = r.match(/(\d+)(\w+)/);
    let result = '';
    let count = 0;
    for (let j = 0; j < codedStr.length; j++) {
        for (let i = 0; i < 26; i++) {
            if ((i * +num) % 26 === alphabet.indexOf(codedStr[j])) {
                count++;
                result += alphabet[i];
            }
        }
    }
    if (count !== codedStr.length) {
        return "Impossible to decode";
    }

    return result;
}