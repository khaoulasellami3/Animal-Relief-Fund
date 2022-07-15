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

    
    
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

 