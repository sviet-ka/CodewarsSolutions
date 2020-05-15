//https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript
for (let i in questions) {
    if (questions[i].constructor === Object) {
        questions[i].usersAnswer = null;
    }
}