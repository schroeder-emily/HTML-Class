console.log("page loading...");

var requestSpan = document.querySelector("#requests");
var username = document.querySelector("#username");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
}

function edit() {
    username.innerText = "Princess Zelda";
}