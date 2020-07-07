//https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
    let bad = 'nopqrstuvwxyz';
    return `${s.split('').filter(el => bad.includes(el)).length}/${s.length}`
}