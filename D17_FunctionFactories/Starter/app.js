function makeGreeting(language) {

    return function(firstName, lastName) {

        if (language === "en") {
            console.log("Hello " + firstName + " " + lastName);
        }

        if (language === "es") {
            console.log("Hola " + firstName + " " + lastName);
        }

    }
}

var greetEnglish = makeGreeting("en");
var greetSpanish = makeGreeting("es");

greetEnglish("John", "Doe");
greetSpanish("John", "Doe");