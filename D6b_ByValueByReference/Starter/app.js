// By value
var a = 3;
var b;

b = a;
a = 2

console.log(a);
console.log(b);
// By refernce
var c = {greeting: "hi"};
var d;

d = c;

c.greeting = "Hello"; //Mutate

console.log(c);
console.log(d);

// By refernce (parameters)
function changeGreeting (obj) {
    obj.greeting = "Hola"; //Mutate
}

changeGreeting(d);

console.log(c);
console.log(d);

// Equals operator sets up new memory sapce (New Adress)

c = {greeting: "Howdy"};
console.log(c);
console.log(d);