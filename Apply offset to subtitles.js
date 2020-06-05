//https://www.codewars.com/kata/5e454bf176551c002ee36486/train/javascript
function subsOffsetApply(str, offset) {
    const regexp1 = /\d+:\d+:\d+,\d+/g;
    const regexp2 = /\d+:\d+:\d+,\d+ --> \d+:\d+:\d+,\d+ (.+)/;
    const timeIntervals = str
        .match(regexp1)
        .map(el => el.split(','))
        .map(el => [...el[0].split(':'), el[1]]);
    const coeffs = [3600000, 60000, 1000, 1];
    const resultIntervalsInMs = timeIntervals
        .map(el => el.reduce((acc, cur, i) => acc + cur * coeffs[i], 0) + offset);
    if (resultIntervalsInMs.some(el => el < 0)) {
        return 'Invalid offset'
    }
    const resultIntervals = resultIntervalsInMs.map((ms, k) => {
        let temp = 0;
        const intervals = []
        for (let i in coeffs) {
            const coeff = coeffs[i];
            const result = (Math.trunc((ms - temp) / coeff) + '').padStart(timeIntervals[k][i].length, '0');
            intervals.push(result);
            temp += result * coeff;
        }
        return intervals;
    });
    const time1 = `${resultIntervals[0][0]}:${resultIntervals[0][1]}:${resultIntervals[0][2]},${resultIntervals[0][3]}`;
    const time2 = `${resultIntervals[1][0]}:${resultIntervals[1][1]}:${resultIntervals[1][2]},${resultIntervals[1][3]}`;
    if (resultIntervals[0][0] > 99 || resultIntervals[1][0] > 99) {
        return 'Invalid offset';
    }
    return `${time1} --> ${time2} ${str.match(regexp2)[1]}`
}