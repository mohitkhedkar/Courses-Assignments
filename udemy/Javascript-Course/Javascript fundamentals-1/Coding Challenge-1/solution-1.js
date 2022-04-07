/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 
Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

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