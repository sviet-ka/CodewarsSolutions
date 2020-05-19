//https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
function match(candidate, job) {
    return ('minSalary' in candidate && 'maxSalary' in job) ?
        (candidate.minSalary * 0.9 <= job.maxSalary) ?
            true : false
        : TestError
}