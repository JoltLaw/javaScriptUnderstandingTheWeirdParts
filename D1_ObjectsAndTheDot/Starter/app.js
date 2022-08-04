var person = new Object();

person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.adress = new Object();
person.adress.street = '111 main street';
person.adress.city = "New York";
person.adress.state = "NY";

console.log(person.adress.street);
console.log(person.adress.city);
console.log(person["adress"]["state"]);