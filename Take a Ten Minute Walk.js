//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
function isValidWalk(walk) {
    if (walk.length !== 10) return false;
    const n = walk.filter(el => el === 'n').length;
    const s = walk.filter(el => el === 's').length;
    const e = walk.filter(el => el === 'e').length;
    const w = walk.filter(el => el === 'w').length;
    console.log(n, s, e, w)
    return n === s && e === w;
}