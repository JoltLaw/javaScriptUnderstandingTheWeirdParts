(function(global, $) {
    
    var Greeter = function(Firstname, Lastname, Language) {
     return new Greeter.init(Firstname, Lastname, Language)

    }

    Greeter.prototype = {}
    
    Greeter.init = function (Firstname, Lastname, Language) {
    
            var self = this;
            self.Firstname = Firstname || "";
            self.Lastname = Lastname || "";
            self.Language = Language || "en";

    }

    Greeter.init.prototype = Greeter.prototype;

    global.Greeter = global.G$ = Greeter;

}(window, jQuery));