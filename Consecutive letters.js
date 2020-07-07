//https://www.codewars.com/kata/5ce6728c939bf80029988b57/train/javascript

function solve(s){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let res = true;
    const arr = s.split('').sort();
    for (let i = 0; i < arr.length-1; i++){
        if (alphabet.indexOf(arr[i]) + 1 !== alphabet.indexOf(arr[i + 1])){
            res = false;
            break;
        }
    }
    return res;
}