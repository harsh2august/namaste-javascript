/*
window: when we create a js file. js engine will create a very big object named window with so many methods and functions.
it is created in global space. we can access these method and functions anywhere in the program.


js enngine also create this keyword.

in the global level, this keyword points to the window object in browser.

window: a global object create with along the global execution context.

when a js program run, a global object, a global execution context is created. along with this, a "this variable" is created.

in browser, global object is window.

even the file is empty, js will create this global object.


in global level or global execution context,

this===window i.e true this==window




global space: anything we write in js which is not inside function.
*/
var a = 10; //in global space
function b() { //in global space
    var x = 10; //in local space
}

//anything that we create in global space, will be attached to window. so to access this
console.log(window.a); //10
console.log(a); //10 so if we dont write window.a it automatically assume that youare refereing to the global space.

console.log(x);  //x is not defined
//if we dont try to write anything infront of x, it try to find x in side the global space/object. so gives error


console.log(this.a); //also this: points to window object

//so this.a, window.a, a: all are reffreing to same space in memory.