//https://www.codewars.com/kata/5b047875de4c7f9af800011b/train/javascript
function sentence(List) {
    List.sort((a, b) => +Object.keys(a)[0] - +Object.keys(b)[0]);
    return List.map(el => Object.values(el)).join(' ');
}