//
function sort(s) {
    let upper = s.match(/\b[A-Z][a-z]*\b/g);
    upper = !(upper === null) ? upper.sort().reverse().join(' ') : '';
    let lower = s.match(/\b[a-z]+\b/g);
    lower = !(lower === null) ? lower.sort().join(' ') : '';
    console.log(lower, lower);

    if (lower && upper) {
        return lower + ' ' + upper;
    } else if (lower) {
        return lower;
    } else if (upper) {
        return upper;
    }
}