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
*/