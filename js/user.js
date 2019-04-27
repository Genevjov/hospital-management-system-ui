
function auth(){
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    if(isAuthDataValid(email,password)){
        getServerAuthResponse(email,password); 
    }  
    
}

function isAuthDataValid(email, password){
    return email.length > 0 && password.length > 0;
}

function getServerAuthResponse(){
    var http = new XMLDocument();
    var url ='google.com';
    http.open('GET', url);
    http.onreadystatechange=(e)=>{
        console.log(http.responseText)
    }
}