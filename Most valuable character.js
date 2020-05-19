//https://www.codewars.com/kata/5dd5128f16eced000e4c42ba/train/javascript
function solve(st) {

    let max = st.lastIndexOf(st[0]) - st.indexOf(st[0]);
    let char = st[0];
    for (let i = 1; i < st.length; i++) {
        if ((st.lastIndexOf(st[i]) - st.indexOf(st[i])) > max) {
            max = st.lastIndexOf(st[i]) - st.indexOf(st[i]);
            char = st[i];
        } else if ((st.lastIndexOf(st[i]) - st.indexOf(st[i])) === max) {
            if (st.codePointAt(i) < char.codePointAt(0)) {
                max = st.lastIndexOf(st[i]) - st.indexOf(st[i]);
                char = st[i];
            }
        }
    }
    return char;
}