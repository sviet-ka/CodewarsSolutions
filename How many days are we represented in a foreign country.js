//https://www.codewars.com/kata/58e93b4706db4d24ee000096/train/javascript
function daysRepresented(trips){
    const allDays = [];
    for (let i = 0; i < trips.length; i++) {
        for (let j = trips[i][0]; j <= trips[i][1]; j++) {
            allDays.push(j);
        }
    }
    const uniqueDays = new Set(allDays);
    return uniqueDays.size;
}