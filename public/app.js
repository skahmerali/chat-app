const { json } = require("express");

const url = "http://localhost:3000"
var userPost = document.getElementById("userPost").value;
let currentUser;
if (localStorage.getItem("currentUser")) {
    currentUser = JSON.parse(localStorage.getItem("userPost"));


}



var socket = io(url);
socket.on('connect', () => {
    console.log("connected")
});


const signup = () => {
    var userName = document.getElementById("signup-name").value;
    var userEmail = document.getElementById("signup-email").value;
    var userPassword = document.getElementById("signup-password").value;
    let obj = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword,
        userPost =[],
    }
    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));


    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {
            let jsonRes = json.parse(Http.responseText)


            if (jsonRes === 200) {
                alert(jsonRes.message);
                window.location.href = "login.html"
            }
            else {
                alert(jsonRes.message)
            }

        }
    }
    return false
}


const login = () =>{

    var userEmail = document.getElementById("Uemail").value.toLowerCase(); 
    var userPassword = document.getElementById("Upasssword").value;

    obj ={
        userEmail : userEmail,
        password : userPassword, 
    }

    const Http = new XMLHttpRequest();
    Http.open("POST" , url );
    Http.setRequestHeader("content-type" ,  "application/json");
    Http.send(JSON.stringify(obj));

    Http.onreadystatechange= (e) =>{
        if (Http.readyState === 4){
            let jsonRes=JSON.parse(Http.responseText)
            if(jsonRes.status === 200){
                alert(jsonRes.message)
                localStorage.setItem("currentUser", JSON.stringify(jsonRes.currentUser));
                window.location.href = "dashboard.html";

            }
            else{
                alert(jsonRes.mesage);
            }
        }
    }
    return false




}
const post=() =>{
    tweetText = document.getElementById("userPost").value;
    var postContent = document.createElement("li");

    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/tweet");
    Http.setRequestHeader("content-type", "application/json");

    Http.send(JSON)
}

















// function signup() {
//     var email = document.getElementById("singup-email").value;
//     var Uname = document.getElementById("singup-name").value;
//     var Upassword = document.getElementById("singup-password").value;

// }