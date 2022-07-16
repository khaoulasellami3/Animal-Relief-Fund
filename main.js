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
 
    var username = document.getElementById('username').value;
    
    var link = document.getElementById('link').value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(user==nul){
        link.innerHTML = "wrong username";
    } else if(username == data.username && password == data.password){
        link.innerHTML = "logged in";
    }
    else{
        link.innerHTML = "wrong password";
    }
}

    


 