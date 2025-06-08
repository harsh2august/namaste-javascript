/*
function outer() {
    function inner() {
        console.log(i)
    }
    // var i = 10; //10
    let i = 10; //10
    return inner;
}
var close = outer();
close();

function outer(b) {
    function inner() {
        console.log(b, i) //harsh 10
    }
    let i = 10; //10
    return inner;
}
var close = outer("Harsh");
close();

//clouse wil first find variable in its scope then parent scope and so on...
function counter() {
    var count = 5;
    function increment() {
        count++;
        console.log(count);
    }
    return increment;
}
var count1 = counter();
count1(); //6
// console.log(count) //13-crazy-js-interview.js:35 Uncaught ReferenceError: count is not defined. private variable
// count1() //7
var count2 = counter();
count2(); //fresh counter in itself //6


//count2(); count2(); //fresh counter all together

//for decrement

//we can use constructor fn for seprate increment and decrement fn

function Counter() {
    var count = 0;
    this.increment = function () {
        count++;
        console.log(count);
    }
    this.decrement = function () {
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();
counter1.increment(); //1
counter1.decrement(); //2
*/

//disadvantages of closures

/*
overconsumption of memory in closure
sometimes those closed variables are not garbage collected. It accumlates a lot of memory if not handles properly.

garbage collector is a program in browser or js engine which freeze the unutilised memory.


how clousre and garbase collector is related?
//closures are not garbage collected if they are still in use.
funtion a(){
var x=0; //garbase collected as it is no longer needed.
return function b(){
    console.log(a);
    }
}
    a();
*/