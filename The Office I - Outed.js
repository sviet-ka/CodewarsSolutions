//https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript
function outed(meet, boss){
    let score = 0;
    let count = 0;
    for (let key in meet) {
        if (key === boss) {
            score += (meet[key] * 2);
            count++;
        } else {
            score += meet[key];
            count++;
        }
    }
    return (score / count  <= 5) ? 'Get Out Now!' :  'Nice Work Champ!';
}