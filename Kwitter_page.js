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
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}