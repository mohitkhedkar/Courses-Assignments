/* 
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/

const markMass = 78;
const markHeight = 1.69;
const JohnMass = 92;
const JohnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
console.log(`Mark BMI ${markBMI}`);
const johnBMI = JohnMass / JohnHeight ** 2;
console.log(`John BMI ${johnBMI}`);

let markHigherBMI = false;
if (markBMI > johnBMI) {
    markHigherBMI = true;
}

console.log(`Mark BMI Higher than John - ${markHigherBMI}`);