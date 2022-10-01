
//ADD YOUR FIREBASE LINKS

const firebaseConfig = {
  apiKey: "AIzaSyDBaJn3u6y9Z7V0oIJfeE8Ve2DK_6WpfLY",
  authDomain: "kwitter-7e99a.firebaseapp.com",
  databaseURL: "https://kwitter-7e99a-default-rtdb.firebaseio.com",
  projectId: "kwitter-7e99a",
  storageBucket: "kwitter-7e99a.appspot.com",
  messagingSenderId: "1019996457005",
  appId: "1:1019996457005:web:462572a46322e0c21bd0a4",
  measurementId: "G-W1TE07F368"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
