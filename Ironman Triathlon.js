//https://www.codewars.com/kata/57d001b405c186ccb6000304/train/javascript
const dist = s => (140.6 - s).toFixed(2);

function iTri(s){
    if (s === 0) {
        return 'Starting Line... Good Luck!';
    } else if (s < 2.4) {
        return {Swim: `${dist(s)} to go!`};
    } else if ( s < 114.4) {
        return {Bike : `${dist(s)} to go!`};
    } else if ( s < 130.6) {
        return {Run: `${dist(s)} to go!`};
    } else if (s < 140.6) {
        return {Run:'Nearly there!'};
    } else {
        return "You're done! Stop running!";
    }
}