//https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca/train/javascriptK
const catchSignChange = arr => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const signChanged = arr[i] < 0 && arr[i + 1] >=0 || arr[i] >=0 && arr[i + 1] < 0;
        count += signChanged ? 1 : 0;
    };
    return count;
};