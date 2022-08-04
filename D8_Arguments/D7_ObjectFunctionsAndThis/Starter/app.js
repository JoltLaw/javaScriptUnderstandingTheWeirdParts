function a (){
    console.log(this);
    this.newvariable = "Hello";
}

var b = function() {
    console.log(this);
}

a();
console.log(newvariable);
b();

var c = {
    name: "The C Object",
    log: function () {
        var self = this;
        self.name = "Updated C Object";
        console.log(self);

        var setName = function (newName) {
            self.name = newName;
        }

        setName("Updated again! C Object");
        console.log(self);
    },
}

c.log();