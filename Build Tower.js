//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
function towerBuilder(nFloors) {
    const arr = [];
    for (let i = 1; i <= nFloors; i++) {
        arr.push(' '.repeat(nFloors - i) +  '*'.repeat(i * 2 - 1) + ' '.repeat(nFloors - i));
    }
    return arr;
}