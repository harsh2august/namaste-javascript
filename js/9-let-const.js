/*
 let and const are hoisted but very diffrently than var. let & const are in temporal dead zone for time being.

// console.log(a);//referenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a); //10
console.log(b); //undefined
var b = 100;


//at intial before code execution, both variable let and var have some value called undefined. in case of var b, it is in global space. but in case of a, it is in script.
//variable with var attached with global object. but let are not the global object now. still let have assigned memory, called hoisting. let variable get another memory space but we cannt access them before assigning a value, so it gives error.


//temporal dead xone:the time since when the let variable was hoisted, till it is being initilaised some value.
//the time from let variable having undefined value(hoisted) till it have assigned some value.
//when the let variables are in temporal dead zone, we cannot access it till it have assigned some value.


//let is not accessible by window.a, this.a because its not object of window

console.log(window.a); //undefined
console.log(this.a); //undefined  //this or window points to global space
console.log(this.x); //undefined  //x is not defined


console.log(window.b);  //100


//in browser, global object is window

//let is more strict then var. we cannt redeclare a variable with let.

// let a = 100;
console.log(a);//uncaught SyntaxError: Identifier 'a' has already been declared

//syntax error. no remaining code will run.


var b = 200;  //with var we can redeclare a variable with same name.
console.log(b); //200


//const behaves very much similar to let. but, it is more strict then let.


let a = 10;  //undefined
const b = 1000; //undefined both will be in tempooral dead zone and will be in diff memory. so we cant acess it.


let a;
// const b = 1000;

a = 100;
console.log(a); //100


//but we cant initilize const variable later.

//const b; //caught SyntaxError: Missing initializer in const declaration. we have inilize here only. else it gives syntax error. not remaining code will execute


b = 100; //we cant initlize const variable later after declartion

console.log(window.b);//100 no error




const b = 100;
b = 1000;
console.log(b); //caught TypeError: Assignment to constant variable.


//diffrence bw syntax error, type error and refrence error

//type error: Assignment to constant variable. means we are going to assign any other value to constant variable. bcs this variable is of type const. we cant assign other value as it is constant



//syntax error

// const b;
// console.log(b);  //aught SyntaxError: Missing initializer in const declaration. here syntax is missing. we have to give value to b.


let a = 10;

let a = 100;  //caught SyntaxError: Identifier 'a' has already been declared. we duplicated the declartion.



//refrence error: when js triy to find a variable inside the memory. but we cant access it.

// console.log(a); //caught ReferenceError: Cannot access 'a' before initialization. bcs a is in temporal deadzone.
// let a = 100;



// console.log(x);  //let-const.js:100 Uncaught ReferenceError: x is not defined. x was not in the memory

let x = true;
console.log(window.x); //undefined as x is not object of window object



x = 5;
console.log(x); //5 no error
*/


//now 3 ways to declare a variable. let const and var.
//suggestion
// 1. use const . when the value of variable is not going to chaange so it will help to get rid of error.

//2. for normal use let to get rid of undefined value as let variable is in temporal deadzone.

//use var very less


//get rid of temporal dead zone. use declartion, inislisation port in scope at top. the work with variables.


//try to minimise temporal deadzone time to 0







