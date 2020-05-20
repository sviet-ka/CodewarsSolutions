//https://www.codewars.com/kata/5550d638a99ddb113e0000a2/train/javascript
function josephus(items,k){
    let temp = [...items];
    let res = [];
    let i = k - 1;
    let step = 0;
    while (items.length > 0) {
        if (i < temp.length) {
            res.push(temp[i]);
            items.splice(i - step, 1);
            i += k;
            step++;
        } else {
            i -= temp.length;
            while (i >= items.length) {
                i %= items.length;
            }
            temp = [...items];
            step = 0;
        }
    }
    return res;
}