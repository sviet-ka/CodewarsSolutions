//https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript
function boredom(staff){
    const scores = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        "pissing about": 25,
    };
    let res = 0;
    const departments =  Object.values(staff);

    for (let i = 0; i < departments.length; i++){
        for (let key in scores){
            if (key === departments[i]) {
                res = res + scores[key];
            }
        }