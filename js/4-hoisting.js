/*
getName();
console.log(x);


var x = 7;
function getName() {
    console.log("Namaste Javascript");
}


hoisting is a phenomenon in js by which you can access the variables and functions even before you have initilised it or put some value in it..
no error





var x = 7;
function getName() {
    console.log("Namaste Javascript");
}

console.log(getName);  //not invoking the function. print the function


//even before js starts executing code. it just deep dive in code and in memory component it stores the variable:undefined(keyword) and function:whole function code

console.log(getName); //whole function code
console.log(x); //undefined
getName(); //execute function code in code component of execution context

var x = 7;
function getName() {
    console.log("Namaste Javascript");
}


//diffrence between not defined and unefined
// if x will not be in memory context and we will try to access itthen it gives error that x is not define

// if there will x defined even after acess of x the x will be in memory context with undefined value


// Hoisting with arrow function

getName(); //getName is not a function. only we can call it after function declartion. else js will treat it as a variable 
console.log(x);
console.log(getName);


var x = 7;

var getName = () => { //in memory context, arrow function behaves like a variable. and that variable will store undefined in memory context. so in hoisting, the variable willnhave a undefined value
    console.log("namaste javascript..");
}


getName(); //getName is not a function. again in memory execution context this getName variable will store a undefined value on place of fn code.
console.log(x);
console.log(getName);


var getName = function () {
    console.log("Hi...");
}

//so only writing function: function getName(){}  will save function code in memory context. and other arrow function that will store as variable with undefined value..
*/

a = 10;
console.log(a); //10 in js a will get global scope and get executed.


// in callstack, anonymous is global execution context.


