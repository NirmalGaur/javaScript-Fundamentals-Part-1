// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

'use strict';
const dolphScore1 = 44, dolphScore2 = 23, dolphScore3 = 71;
const koalaScore1 = 65, koalaScore2 = 54, koalaScore3 = 49;
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let avgDolphins = calcAverage(dolphScore1, dolphScore2, dolphScore3);
let avgKoalas = calcAverage(koalaScore1, koalaScore2, koalaScore3);
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas)
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    else if (avgKoalas >= 2 * avgDolphins)
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    else
        console.log(`No one wins`);
};
checkWinner(avgDolphins, avgKoalas);
//Data 2:
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);