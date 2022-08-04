function greet (firstName, lastName, Language) {

    Language = Language || "en"

    if(arguments.length === 0) {
        console.log("Missing Parameters");
        console.log("-----------");
        return
    }

    console.log(firstName);
    console.log(lastName);
    console.log(Language);
    console.log(arguments);
    console.log("Arg 0: " + arguments[0]);
    console.log("-----------");
}

greet();
greet("John");
greet("John", "Doe");
greet("John", "Doe", "es")