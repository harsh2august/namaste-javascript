/*
js assign a memory to every variable and function even before the ciode is executed..


var a = 7;

// undefined: it is like a placeholder given to the variable in execution context. and value to the variable is not assigned then the variable have undefined value.


console.log(x);  //undefined-vs-notdefined.js:10 Uncaught ReferenceError: x is not defined
//when the variable is not declared then js dont give memory to that undeclared variable. and when we acess that undeclared variable then it gives error that Uncaught ReferenceError: x is not defined



//undefined is like a placeholder that is assigned to the declred varibale until that variable not have the assigned vvalue.


var a;
console.log(a); //undefined
// a = 10;  //a is not undefined..
if (a === undefined) {  //strict checking..
    console.log("a is undefined..");  ////a is undefined..
}
else {
    console.log("a is not undefined..");
}



//javascript is a loosly/weakly typed programming language. it doesnt attaches its variable to any data type

var a;
console.log(a); //undefined
a = 5;
console.log(a); //5
a = "Harsh";
console.log(a); //Harsh

*/


var a = undefined; //we dont have to do this.  only undefined is used for meaning of the value assigned to variable by js engine who dont have any value assigned to it.
console.log(a); //undefined
