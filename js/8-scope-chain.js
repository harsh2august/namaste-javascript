/*
hotest topic in js


lexical environment: local memory + lexical environment of the parent

scope chain: whole chain of lexical environment

if a variable is not present then the lexical environment is exhausted & it will tell that it is not inside scope chain.

*/



function a() {
    // console.log(b);
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}
// console.log(b);  /ferenceError: b is not defined: because b is not defined outside function

// var b = 10; //global variable
a();  //10



// scope: where we can access a specific variable or function

// lexical: heirarchy. c() is lexically sitting inside the a().


//scope of c: local env of c+ lexical environment of a and global environment

