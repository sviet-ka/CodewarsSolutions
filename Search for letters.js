//https://www.codewars.com/kata/52dbae61ca039685460001ae/train/javascript
function change(string){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = '';
    for (let i = 0; i < alphabet.length; i+=1) {
        if (string.includes(alphabet[i]) || string.includes(alphabet[i].toLowerCase())) {
            res += '1';
        } else {
            res += '0';
        }
    }
    return res;
}