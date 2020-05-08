//https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/javascript
function determineTime(durations){
    const durationsInSeconds = durations
        .map(el => el
            .split(':')
            .map((e, j) => {
                switch(j) {
                    case 0:
                        return +e * 3600;
                    case 1:
                        return +e * 60;
                    default:
                        return +e;
                }
            })
            .reduce((acc, cur) => acc + cur)
        );
    return durationsInSeconds.reduce((acc, cur) => +acc + cur, 0) <= 86400;
}