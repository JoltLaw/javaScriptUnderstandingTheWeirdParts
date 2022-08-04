var person = {
    firstName: "default",
    lastName: "default",
    getFullName: function() {
        return this.firstName + " " + this.lastName
    }
}

var john = {
    firstName: "John",
    lastName: "Doe"
}

// Don't do this ever. demo purposes only
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstName);

var jane = {
    firstName: "Jane"
}

jane.__proto__ = person;
console.log(jane.getFullName())