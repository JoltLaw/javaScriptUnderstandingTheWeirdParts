// Creating a Greetr Object
var g = G$('John', 'Doe');


// Use chainable methods
g.greet().setLang('es').greet(true).log();


// Using greetr on click of login button
$("#login").click(function() {

    // Create new greetr Object
    var loginGrtr = G$("John", "Doe");

    // Hide login inputs
    $("#logindiv").hide();

    // pass greetr greeting into an html element (#greeting)
    loginGrtr.setLang($('#lang').val()).HTMLGreeting("#greeting", true).log();
})