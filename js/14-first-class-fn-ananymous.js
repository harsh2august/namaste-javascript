function a() { //fn statement or fn declaration
    console.log("a called...")
}
a();
//we can aasign a fn to variable also //fn acts like a value
var b = function () { //fn expression
    console.log("b called")
}
b();



//major diff bw fn statementa nd fn expression
/*
hoisting
in fn statement, during memory creation phase, a is created in memory and fn is assigned.


in case of fn expression, fn is treated like any other variable.
it is undefined initially untill the code reaches this line



Ananymous fn: a fn without name
it doesnt have their own identity.

function(){ //syntax error //as per eccma it should have name
}

//fn statements requires a function name


use of it
it is used where fn is used as values
we cant use ananymous fn as function statement.


we can assign the ananymous fn to a variable.


var b = function xyz() { //xyz is not a function inside the outer scope
    console.log("B called")
}
xyz() //uncaught ReferenceError: xyz is not defined


//parameters and arguments
var b = function (a, b) { //a and b is parameter //local variable in fn scope //value received by fn in local scope is parameter.
    console.log(a + b)
}
b(2, 4); //value passed to fn is arguments

//first class fn

we can pass fn inside another fn as an argument
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!


fn are treated as values.

var b = function (a) {
    return function () {

    }
}
console.log(b()); //ananymous fn

//the ablity to use fn as values is known as first class fn.
//the ablity to use fn as variable, can pass fn as argument and can return a fn inside a fn is know as first class fn.
//fn are same class citizen.
*/
// let const and arrow fn instroduced in es6 2015
//arrow fn