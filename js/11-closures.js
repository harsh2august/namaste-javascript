/*
// var a = 7;
function x() {
    var a = 7;  //local variable of x function
    function y() {
        console.log(a);
    }
    y();
}


// console.log(a);  //caught ReferenceError: a is not defined. because var a is local in x fn.
// console.log(this.a);  //undefined
// console.log(window.a);  //undefined


x();  //7  //first in fun y, it will find a in y fn, then goto its lexical parent, then goes to global memory.


//this is closure.

Closure (x)
a: 7


//fn binds together with its lexical environment forms a closure.

//a fn bundles with its lexical envirnment forms a closure.

//fn+lexical scope=closure.


//fn y has acess to its parent lexical scope.

//In other words, a closure gives you access to an outer function's scope from an inner function.


function x() {
    var a = function y() { //assign fn y to var a.
        console.log(a);
    }
    y();  //Closures.js:43 Uncaught ReferenceError: y is not defined at x.
}

// x();
console.log(a); //-closures.js:47 Uncaught ReferenceError: a is not defined.



function x() {
    var a = 7;
    y();  //caught ReferenceError: y is not defined at x.
}


x(function y() {  //pass function inside fn as a parameter.
    console.log(a);
});



//we can even return a function from function.


function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}


var c = x(); //c contains fn y code.

console.log(c);

/*
ƒ y() {
        console.log(a);
    }


//now we have return fn y, so it no longer recides inside x. so how this will behave outside other lexical scope.

//as z is outside the fn. so how it will behave.

////1000code


c();//7


//after line no 74, x is gone. so how c() will find var a.

//even fn returned from another fn, it mainitained their lexical scope from where it came.


//so there was a. it has a strong binding.

//when we return y, then not just the fn code returned, but the whole closure was returned.

//i.e closure enclosed fn & its lexical scope was returned. it was came in z.

//so if we exe z somewhere, it still remember var a.



//in interview, closure: fn bundled together with its lexical env forms closures. give this example now.


//cool developers

function x() {
    var a = 7;
    return function y() {
        console.log(a);
    }

}


var z = x();
console.log(z);

ƒ y() {
    console.log(a);
}

z();  //7


//will work the same way.

//output based qns from closure in interview. lets see tiny complex qns for interview.

function x() {
    var a = 7;
    function y() {
        console.log(a); //a refrence is returned
    }
    a = 100;  //100 replaced value in a memory. 
    return y;
}


var z = x();
console.log(z);

// ƒ y() {
//     console.log(a);
// }

z(); //100  //closure gives 100.   vdo 11: 15:30
*/

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}

z();

// 2 closures
// Closure(x)
// a: 7  //parent scope
// Closure(z)
// b: 900 //parent parent scope


// few common use of closure.

// module design pattern
// currying:currying in js possible due to closure
// fun like once: the fn which will only run once
// memoize
// maintaing state in async world
// setTimeouts
// Iterarors
// and many more


//fn remember everything..