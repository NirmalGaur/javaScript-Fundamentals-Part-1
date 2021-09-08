// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

let massMark = 78, higtMark = 1.69, massJohn = 92, higtJohn = 1.95;
let markHigherBMI = (massMark / higtMark ** 2 > massJohn / higtJohn ** 2);
console.log(markHigherBMI);
massMark = 95, higtMark = 1.88, massJohn = 85, higtJohn = 1.76;
markHigherBMI = (massMark / higtMark ** 2 > massJohn / higtJohn ** 2);
console.log(markHigherBMI);

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

massMark = 78, higtMark = 1.69, massJohn = 92, higtJohn = 1.95;
let markBMI = massMark / higtMark ** 2;
let johnBMI = massJohn / higtJohn ** 2;
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
}
else {
    console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})`);
}

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

let dolpscore1 = 96, dolpscore2 = 108, dolpscore3 = 89;
let koalscore1 = 88, koalscore2 = 91, koalscore3 = 110;
if ((dolpscore1 + dolpscore2 + dolpscore3) / 3 > (koalscore1 + koalscore2 + koalscore3) / 3)
    console.log("team Dolphins wins!");
else if ((dolpscore1 + dolpscore2 + dolpscore3) / 3 < (koalscore1 + koalscore2 + koalscore3) / 3)
    console.log("team Koalas wins!");
else
    console.log("there is a draw");
//Bonus 1:
dolpscore1 = 97, dolpscore2 = 112, dolpscore3 = 101;
koalscore1 = 109, koalscore2 = 95, koalscore3 = 123;
let avgscoreDolp = (dolpscore1 + dolpscore2 + dolpscore3) / 3;
let avgscoreKoal = (koalscore1 + koalscore2 + koalscore3) / 3;
if ((avgscoreDolp > avgscoreKoal) && (avgscoreDolp >= 100))
    console.log("team Dolphins wins!");
else if ((avgscoreDolp < avgscoreKoal) && (avgscoreKoal >= 100))
    console.log("team Koalas wins!");
else
    console.log("there is a draw");
//Bonus 2:
dolpscore1 = 97, dolpscore2 = 112, dolpscore3 = 101;
koalscore1 = 109, koalscore2 = 95, koalscore3 = 106;
avgscoreDolp = (dolpscore1 + dolpscore2 + dolpscore3) / 3;
avgscoreKoal = (koalscore1 + koalscore2 + koalscore3) / 3;
if ((avgscoreDolp > avgscoreKoal) && (avgscoreDolp >= 100))
    console.log("team Dolphins wins!");
else if ((avgscoreDolp < avgscoreKoal) && (avgscoreKoal >= 100))
    console.log("team Koalas wins!");
else {
    if (avgscoreDolp >= 100)
        console.log("there is a draw");
    else
        console.log("no one wins");
}