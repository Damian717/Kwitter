
var firebaseConfig = {
      apiKey: "AIzaSyAL2l6f3nFGTMDQizzjxryJDLAxkNj8iYA",
      authDomain: "twitter-7b5a0.firebaseapp.com",
      databaseURL: "https://twitter-7b5a0-default-rtdb.firebaseio.com",
      projectId: "twitter-7b5a0",
      storageBucket: "twitter-7b5a0.appspot.com",
      messagingSenderId: "757130725414",
      appId: "1:757130725414:web:aefe784b0cccf37dd2fee7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

     
 
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 
function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
 
function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
 
}
 
getData();
 
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
 
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}

