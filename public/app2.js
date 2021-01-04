// const socket = io("http://localhost:8000");

// const form = document.getElementById("send-container");
// const messageInput = document.getElementById("messageInp");
// const messageContainer = document.querySelector(".container");
// const name = prompt("Enter your name to join");


// const append = (message, position) =>{


//     const messageElement =  document.createElement('div');
//     messageElement.innerText = message; 
//     message.classList.add("message");
//     message.classList.add(position);
//     messageContainer.append(messageElement);



// }


// socket.emit('new-user-joined', name);

//  socket.on('user-joined' , name => {
//     append(`${data.message}: ${data.user}` , 'right')
//  })

// function msg() {
//     var msg = document.getElementById("messageInp").value;
//     var newRight = document.createElement('div');
//     var rightMsg = document.createTextNode(msg);
//     // console.log(rightMsg)
//     newRight.appendChild(rightMsg)
//     document.getElementById('right').appendChild(newRight);
//     newRight.setAttribute("class","right")
//     // newRight.innerHTML = msg;
//     // document.body.appendChild(newRight);
//     // rightmsg=msg;
//     // document.body.appendChild(msg);
//     // console.log(newRight)

//     // console.log(msg)
//     // rightMsg=msg;


//     return false;
// }   
// const post = () => {

//     let tweetText = document.getElementById("userPost").value;
//     var postContent = document.createElement("li");

//     const Http = new XMLHttpRequest();
//     Http.open("POST", url + "/tweet");
//     Http.setRequestHeader("Content-Type", "application/json");

//     Http.send(JSON.stringify({
//         userName: currentUser.userName,
//         tweetText: tweetText,
//     }));

//     Http.onreadystatechange = (e) => {
//         if (Http.readyState === 4) {
//             jsonRes = JSON.parse((Http.responseText));
//             console.log("posted success");
//         }
//     }
// }
// const getTweets = () => {

//     if (localStorage.getItem("currentUser")) {
//         currentUser = JSON.parse(localStorage.getItem("currentUser"));
//         document.getElementById("welcomeUser").innerHTML = `Welcome, ${currentUser.userName}`
//     }

//     if (!currentUser) {
//         welcomeUser.innerHTML = "Signup and tweet your thoughts away";
//         document.getElementById("lgBtn").innerText = "Signup Now";
//     }

//     const Http = new XMLHttpRequest();
//     Http.open("GET", url + "/tweets");
//     Http.send();
//     Http.onreadystatechange = (e) => {
//         if (Http.readyState === 4) {

//             let tweets = JSON.parse((Http.responseText));

//             for (let i = 0; i < tweets.length; i++) {
//                 // console.log(tweets[i].userName)

//                 var eachTweet = document.createElement("li");
//                 eachTweet.innerHTML =
//                     `<h4 class="userName">
//                     ${tweets[i].userName}
//                 </h4> 
//                 <p class="userPost">
//                     ${tweets[i].tweetText}
//                 </p>`;
//                 // console.log(`User: ${tweets[i]} ${tweets[i].userPosts[j]}`)
//                 document.getElementById("posts").appendChild(eachTweet)

//             }
//         }
//     }
// }

// socket.on("NEW_POST", (newPost) => {

//     let jsonRes = JSON.parse(newPost);

//     var eachTweet = document.createElement("li");
//     eachTweet.innerHTML =
//         `<h4 class="userName">
//         ${jsonRes.userName}
//     </h4> 
//     <p class="userPost">
//         ${jsonRes.tweetText}
//     </p>`;
//     // console.log(`User: ${tweets[i]} ${tweets[i].userPosts[j]}`)
//     document.getElementById("posts").appendChild(eachTweet)
// })

