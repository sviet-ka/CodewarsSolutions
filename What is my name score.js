//https://www.codewars.com/kata/576a29ab726f4bba4b000bb1/train/javascript
function nameScore(name){
    nameUC = name.toUpperCase();
    let res = 0;
    for (let i in nameUC) {
        for (let key in alpha) {
            if (key.includes(nameUC[i])) {
                res += alpha[key];
                break;
            }
        }
    }
    return {[name] : res};
}