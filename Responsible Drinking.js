//https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript
function hydrate(s) {
    const numberOfGlasses = s.match(/\d+/g).reduce((acc, cur) => acc + +cur, 0)
    return `${numberOfGlasses} glass${(numberOfGlasses > 1) ? 'es' : ''} of water`
}