// callback fn: we can take a fn and pass in another fn and this is known as callback fn.
/*
it gives access to the whole asynchronus world in synchornus single threaded language.

i.e js can do one task at a time in a specific manner.
bue due to callback we can do asysnc things inside js.


x(function y(){
    console.log("I am y. This is a callback function");
}
    this is called callback fn as it is upto x when to call y function.


    setTimeout(function y(){
    console.log("callback fn")
    },1000)

setTimeout(function y() {
    console.log("Timer") //first timer will registered //will attach a 5000 ms timer and will store in diff memory space.
}, 1000)

function x(y) {
    console.log("I am x");
    y()
}
x(function y() {
    console.log("I am y. This is a callback function");
})


document.getElementById("clickMe").addEventListener("click", function x() {
    console.log("Button clicked! This is a callback function.");
})

let count = 0
document.getElementById("clickMe").addEventListener("click", function x() {
    console.log("Button clicked! This is a callback function.", ++count);
})
function attach() {
    let count = 0
    document.getElementById("clickMe").addEventListener("click", function x() {
        console.log("Button clicked! This is a callback function.", ++count);
    })
}
attach();
// console.log(count) //private variable due to closure
    */
//    garbage collector and remove event listener


//event listenrs are heavey as it form a clousere and it cant free up memory.

