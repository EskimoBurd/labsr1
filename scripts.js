"use strict";

//--- for loop counting from 0 to 10
for (let i= 0; i <= 10; i++){
    console.log(i);
}
// for loop counting from 10 to 0
for (let a= 10; a>= 1; a--){
    console.log(a)
}
// while loop counting from 1 to 10
let b = 1
while (b < 10) {
   b++;
   console.log(b)
}
//while loop counting from 10 to 1
let c = 10
while (c > 1) {
    c--;
    console.log(c)
}

//part 1 conditions ----- 
let actualTemp = 60;
let desiredTemp = 70;
if (actualTemp > 70){
console.log("Run heat")
 } else if (actualTemp < 70) {
     console.log("Run AC")
 }

// array 1 to 10 using a for..of loop --- does the number of numbers(the variable) matter I assume

 const numbers = [1,2,3,4,5,6,7,8,9,10];
    for (const number of numbers) {
        console.log(number);
    }
// do while loop... have some trouble with this one.
// let z = 1;    

// do {

// }
// while (){
//     console.log()
// };

 //-- Extra credit portion... conversion ?
// let tempCelsius = 5
// let targetUnit = "C"


// let targetUnit = prompt("Check the temperature");
// switch (targetUnit) {
// case "":
// console.log(`${tempCelsius}`);
// break;
// case "":
// console.log("");
// break;
// case "":
// console.log("");
// break;
// default:
// console.log("");
// break;
// }