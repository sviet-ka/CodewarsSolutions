//https://www.codewars.com/kata/57d29ccda56edb4187000052/train/javascript
function rpsls(pl1,pl2){
    if (pl1 === pl2) return "Draw!";
    const rules1 = {
        'scissors' : 'paper',
        'paper' : 'rock',
        'rock' : 'lizard',
        'lizard' : 'spock',
        'spock' : 'scissors',
    }
    const rules2 = {
        'scissors' : 'lizard',
        'paper' : 'spock',
        'spock' : 'rock',
        'rock' : 'scissors',
        'lizard' : 'paper',
    }
    if (pl2 === rules1[pl1] || pl2 === rules2[pl1]) {
        return "Player 1 Won!";
    }
    else {
        return "Player 2 Won!";
    }
}