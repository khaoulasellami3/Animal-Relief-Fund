//sign up function

function signup(e){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


var user = {
    username: username,
    email: email,
    password: password,
};

var json = JSON.stringify(user);
localStorage.setItem(username,json);
console.log("welcome you are one of us")

}


function loginFunc(e){
    event.preventDefault();
    console.log("hello");
}


function doSomething(){
    document.getElementById("anim").innerHTML = "You are welcome, now you become one of us"
}