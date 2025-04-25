//1. funtion declaration
function add(a, b) {
    console.log(`Addition of ${a} and ${b} is ${a + b}`);
}

add(10, 20);
//if the function has no name then it is called as anonymous function
let sub = function (a, b) {
    console.log(`Subtraction of ${a} and ${b} is ${a - b}`);
}
sub(20, 10);

//3. Immediately invoked function expression (IIFE), we dont use it frequently

(function (a, b) {
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`);
})(10, 20);


//4. Arrow functions ,in java it is lambda function
var div = function(a,b){
    console.log(`Division of ${a} and ${b} is ${a/b}`);
}
//write a function expression, then delete the function word , then replace it with => expression
div = (a,b) => {
    console.log(`Division of ${a} and ${b} is ${a/b}`);
}

//The main difference between arrow function and other function lies in
//HOW 'THIS' function is handled by the arrow funcion
