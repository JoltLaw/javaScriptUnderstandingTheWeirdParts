function sayHiLater() {
     var greeting = "Hi!"
     setTimeout(function() {
        console.log(greeting);
     }, 3000)
}

sayHiLater();

// JQuery uses function expressions and first class functions
// $("button").click(function() {

// })


function tellmeWhenDone (callback) {
    var a = 1000
    var b = 2000
    callback()
} tellmeWhenDone(function() {
    console.log("I'm Done!")
});
tellmeWhenDone(function() {
    console.log("All done...")
})