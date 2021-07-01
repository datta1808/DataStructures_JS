// To show Sum of three Integer such that they adds to ZERO

const prompt = require('prompt-sync')();

    let numArr = [];
    let numOne = Number(prompt("Enter first number "));
    let numTwo = Number(prompt("Enter second number "));
    numArr.push(numOne);
    numArr.push(numTwo);

    function sum(total, num) {
        return total + num;
    }

    let numThree = 0 - numArr.reduce(sum, 0);

    console.log("The third number to make sum zero is " + numThree);