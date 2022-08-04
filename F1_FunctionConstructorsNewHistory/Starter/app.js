function person (firstName, lastName) {
    console.log(this)
    this.firstName = firstName;
    this.lastName = lastName;
    console.log("this function is invoked")

}

var John = new person("John", "Doe");
console.log(John);

var jane = new person("Jane", "Doe")
console.log(jane);