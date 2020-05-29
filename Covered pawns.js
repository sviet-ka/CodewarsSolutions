//https://www.codewars.com/kata/597cfe0a38015079a0000006/train/javascript
function coveredPawns(pawns){
    const letters = 'abcdefgh';
    const numbers = '12345678';
    let count = 0;

    for (let pawn of pawns) {
        if (pawns.some(([col, row]) =>
            (col === letters[letters.indexOf(pawn[0]) - 1]  &&
                row === numbers[numbers.indexOf(pawn[1]) - 1])
            ||
            (col === letters[letters.indexOf(pawn[0]) + 1]  &&
                row === numbers[numbers.indexOf(pawn[1]) - 1])
        )
        ) {
            count++;
        }
    }
    return count;
}