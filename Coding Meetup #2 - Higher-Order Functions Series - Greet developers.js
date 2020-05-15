//https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript
function greetDevelopers(list) {
    for (let i in list) {
        list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`
    }
    return list;
}