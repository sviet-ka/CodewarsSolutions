//https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
function encode(string) {
    const vowelsCodes = {'a':'1', 'e':'2', 'i':'3', 'o':'4', 'u':'5'}
    return string
        .split('')
        .map(el => (el in vowelsCodes) ? vowelsCodes[el] : el)
        .join('');
}
function decode(string) {
    const vowelsDecoded = {'1':'a', '2':'e', '3':'i', '4':'o', '5':'u'}
    return string
        .split('')
        .map(el => (el in vowelsDecoded) ? vowelsDecoded[el] : el)
        .join('');
}