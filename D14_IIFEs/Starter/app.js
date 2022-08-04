function greet(Name) {
    console.log("Hello " + Name);
}
greet("John")

var greetfunc = function (Name) {
    console.log("Hello " + Name);
}
greetfunc("John");

// Immediately Invoked Function expression (IIFE)
var greeting = function(Name) {
    return "Hello " + Name;
}("John");
console.log(greeting);

var firstName = "John";

(function(Name) {
var greeting = "Inside IIFE: Hello";
console.log(greeting + " " + Name);

}(firstName)) //IIFE