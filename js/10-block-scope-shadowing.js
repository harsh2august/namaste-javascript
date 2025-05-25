/*
scope: scope of variable & function is the place where these are accessible.
block is defined by these curly braces. {}

this is a perfectly valid js code. {}: block

block is known as compound statement

a block is used to combine multiple js statements into one group.
{
    var a=10;
    console.log(a);
}


we need to group these statements together so that we can use multiple statements in a place where js expects only 1 statements.


// if (true)  //caught SyntaxError: Unexpected end of input. it expects atleast one statement over here.

// if (true) true  //if we want to write multiple statements. we can do that by grouping them together.

if (true) {
    //compound statement
    var a = 10;
    console.log(a);  //10
}

//so these group of multiple statements can be used in a space where js expects a single sttement.

//thats why we use if without {} blcok for single statement
if (true) console.log("Harsh") //Harsh

//but if we want to write multiple statement over here. we need to write block {} over here. we can use block {} in loop or anywhere for multiple statement.


//Block scope: the space where all variable & functions of block will be accessed here.

{
    var a = 10;  //a is hoisted in global space
    // let a = 20; caught SyntaxError: Identifier 'a' has already been declared

    let b = 20;  //b & c is hoisted in block scope
    const c = 30;
}


//let & const are block scope. there are stored in a seprate memory space which is reserved for this block.

//after execution of this block, let & const variable are no longer acessible. we cnt access let & const variable outside this block. i.e let & const are in block scope.
//we can access var even outside block. bcs it is in global scope.


{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}

console.log(a);  //10
console.log(b);  //caught ReferenceError: b is not defined. bcs b is not in global scope.
console.log(c);  //Uncaught ReferenceError: c is not defined

//out of block only a(var) is accessible.



//shadowing:  if same variable is outside the block, then the block var will shadowed the variable.

var a = 100;
{
    var a = 10;  //the block var a=10 shadowed the old var a=100. & modified the value to 10
    let b = 20;
    const c = 30;
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(a); //10   //bcs var a=10 of block will overwrite the var a=100(outside block.)

//both a are refereing to same memory space i.e global space

//this case is not same in let & const.



let b = 100; //this b variable in script memory
{
    var a = 10; //a in global memory scope
    // let b = 20;  //this b in block scope
    const c = 30;
    console.log(a); //10
    console.log(b); //20  //block scope
    console.log(c); //30
}

console.log(b);  //100  //in script memory  //outside block scope


//outside block , variable declared with let & const are in script memory.

//in block scope, let & const variable are in block scope. only accessible there.

//var in block & outside block are always in global memory.


let b = 100;

{
    console.log(b); //100 //bcs there is no b in block memory, so js will find b in lexical environment of block.
}

console.log(b); //100



//same thing like let with const happend

const c = 100;  //script memory . script
{
    const c = 10;  //blcok scope. let & const variable of block scope only accessible in block. this c shadowed script c in block
    console.log(c);  //10
}
console.log(c); //100



//shadowing in function: shadowing in function will be same also but look below ex.


let c = 100;
function x() {
    let c = 20;
    console.log(c);
}
x();  //20
console.log(c); //100


//function blcok {} let variable will be in local memory.



var c = 100;  //global memory

function x() {
    var c = 10; //local memory
    console.log(c);
}
x(); //10
console.log(c); //100 // //without fn it will be 10



var c = 100;
{ //blcok used to group multiple statement into  single statement where js expects single statement
    var c = 20;
    console.log(c); //20
    console.log(this.c); //20
}
console.log(c); //20
console.log(this.c); //20




var c = 100;
function x() {
    var c = 10;
    console.log(c); //10
    console.log(this.c); //100 //bcs this points to global memory
    console.log(window.c); //100  //bcs window is global object
}
x();
console.log(c);  //100
console.log(this.c); //100
console.log(window.c); //100



let a = 10;
function x() {
    let a = 100;  //this a with let only accessible inside local
    console.log(a); //100 //local memory
    console.log(this.a); //undefined //bcs this & window points to global memory
    console.log(window.a); //undefined
}
x();
console.log(a); //10 //script memory

//let and const are block scope


//illegal shadowing:

let a = 20;
{
    // var a = 30; //Ientifier 'a' has already been declared. bcs var a is global which is accessible outside this block
}

//if we shadow let variable inside the block scope using var we cannt do that.

//we can shadow a let using let. but we cant shadow a let using var.



var a = 20; //global
{
    let a = 30; //block
}


//var is function scope
let a = 20; //script memory
function x() {
    var a = 100;  //this var a is in local function memory
    console.log(a); //100

}
x();
console.log(a);  ////20

// const

const a = 20; //blcok
{
    const a = 30; //script
}


const a = 20; //blcok
{
    var a = 30; //script //caught SyntaxError: Identifier 'a' has already been declared
}



//block scope also follow lexical scope


const a = 20; //script
{
    const a = 30;  //block  //let & const are block scope
    console.log(a); //30
    {
        console.log(a); //30
    }
}
console.log(a); //20
*/

//same scope rule will be followed inside arrow function too, like function with function keyword

//arrow function behaves diffrently in memory execution context