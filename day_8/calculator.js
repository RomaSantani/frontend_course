//Requirements:
//Create a function which takes 3 parameters 1. First number 2. Second Number 3. Operator 
//Operator is a string whose values can be + , -, *, /
//function name is calculator 

// function calculator(firstNumber, secondNumber, operator) {
//     if (operator === "+") {
//         console.log("The result is: " + (firstNumber + secondNumber));
//     } else if (operator === "-") {
//         console.log("The result is: " + (firstNumber - secondNumber));
//     } else if (operator === "*") {
//         console.log("The result is: " + (firstNumber * secondNumber));
//     } else if (operator === "/") {
//         console.log("The result is: " + (firstNumber / secondNumber));
//     } else if (operator === "**") {
//         console.log("The result is: " + (firstNumber ** secondNumber));
//     } else if (operator === "%") {
//         console.log("The result is: " + (firstNumber % secondNumber));
//     } else {
//         console.log("Operator is invalid!!");
//     }
// }
// calculator(4, 5, "+");
// calculator(4, 5, "-");
// calculator(4, 5, "*");
// calculator(10, 5, "/");
// calculator(3, 2, "**");
// calculator(10, 7, "%");
// calculator(3, 4, "$");

function calculator(firstNumber, secondNumber, operator) {
    if (operator === "+") {
        return firstNumber + secondNumber;
    } else if (operator === "-") {
        return firstNumber - secondNumber;
    } else if (operator === "*") {
        return firstNumber * secondNumber;
    } else if (operator === "/") {
        return firstNumber / secondNumber;
    } else if (operator === "**") {
        return firstNumber ** secondNumber;
    } else if (operator === "%") {
        return firstNumber % secondNumber;
    } else {
        return "Operator is invalid!!";
    }
}
console.log("The result is: " + calculator(4, 5, "+"));
console.log("The result is: " + calculator(4, 5, "-"));
console.log("The result is: " + calculator(4, 5, "*"));
console.log("The result is: " + calculator(10, 2, "/"));
console.log("The result is: " + calculator(2, 4, "**"));
console.log("The result is: " + calculator(14, 5, "%"));
console.log("The result is: " + calculator(4, 5, "$"));
