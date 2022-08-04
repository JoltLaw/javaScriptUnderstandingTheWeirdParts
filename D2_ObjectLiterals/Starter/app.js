var Tony = {firstName: "Tony", lastName: "Alicea", adress: {street: "111 Main St.", city: "New York", state: "NY"}};
console.log(Tony)

function greet(person) {
    console.log("Hi " + person.firstName);
}

greet(Tony);
greet({firstName: "Mary", lastName: "Doe"})
Tony.adress2 = {
    street:'333 Second Street.'
}
