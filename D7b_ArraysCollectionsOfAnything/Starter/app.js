var arr = [1, false, {name: "Tony", adress: "111 main St."}, function (name) {var greeting = "Hello "; console.log(greeting + name);}, "Hello"];

console.log(arr)
arr[3](arr[2].name);