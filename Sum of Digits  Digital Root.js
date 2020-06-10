// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
function digital_root(n) {
    if (n < 10) {
        return n;
    }
    const sum = n % 10 + digital_root(Math.floor(n / 10));
    if (sum < 10) {
        return sum;
    }
    return digital_root(sum);
}