/*


function x() {
    var i = 1;
    setTimeout(function () { //callback function. this fun form a closure. so it remember i. were this fn executes, it takes the refrence along with it.
        console.log(i);  //1 after 3 second
    }, 3000);
    console.log("Namaste Javascript");
}

x();

// Namaste Javascript. js didint wait for 3 second. setTimeout is asynchronus. so parllel execution
// 1


//js dont wait

//setTimeout stores that callback fn  and attach a timer to it. and js proceed to next line & print Namaste Jvascript. after 3000ms is done, it takes that fn & put fn again to call stack & runs it.



// print 1 after 1 sec, 2 after 2 sec, 3 after 3 sec and so on...

function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}

x();

//6 5 times


//in closure, fn remembers the reference to variable, not the variable value.

//first for loop create 6 copy of call back fn. then in for loop value of i will be. then after 1 sec i=6 will be printed.


//fix this by using let
function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}

x();

// Namaste Javascript
// 1
// 2
// 3
// 4
// 5

//let has a block scope. so for each loop iteration, this i will be new variable. each time setTimeout fn will run, this call back inside settimeout will have a new copy of i with it.

// every time settimeout fn will run, that callback fn will form a closure with new variable itself. the copy of i in each iteration will be new.

*/

//do this var.

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        }
        close(i);  //everytime there will be new variable created and passed to close fn. everytime new i will be assigned to close fn.
    }
    console.log("Namaste Javascript");
}

x();

// Namaste Javascript
// 1
// 2
// 3
// 4
// 5