const firebaseConfig = {
    apiKey: "AIzaSyBnejjisKKSI-WzvltUpJ4s86hYa3H4Cng",
    authDomain: "lets-chat-web-app-f95d2.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-f95d2-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-f95d2",
    storageBucket: "lets-chat-web-app-f95d2.appspot.com",
    messagingSenderId: "720783839315",
    appId: "1:720783839315:web:38cc0568f436fc955cb6a6"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End Code
});});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html"
}