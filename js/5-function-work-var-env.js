//if function with same name will be there then it will not give error. only function at bottom will be replace over first function. even in hoisting


var x = 1;
a();//10
b();//100
console.log(x);//1
function a() {
    let x = 10;
    console.log(x);
}
function b() {
    let x = 100;
    console.log(x);
}

//based on memory execution context
//explain call stack
// after execution of function. call stack of both function:a,b will be deleted. after print x globally, global context:anonymous will be poped out from call stack

//then after that every thing global execution context and alll call stack will be deleted.

//try running debugger scope
