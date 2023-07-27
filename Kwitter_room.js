const firebaseConfig = {
  apiKey: "AIzaSyAqyMPkPJeBRFwvgPorFksR7SIQ8r_5sHI",
  authDomain: "project-94-c0e2c.firebaseapp.com",
  databaseURL: "https://project-94-c0e2c-default-rtdb.firebaseio.com",
  projectId: "project-94-c0e2c",
  storageBucket: "project-94-c0e2c.appspot.com",
  messagingSenderId: "873799338129",
  appId: "1:873799338129:web:aa791672fb5dc60f101730"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  user_name=localStorage.getItem("username");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    localStorage.setItem("roomname",room_name);

    window.location="kwitter_page.html";

    firebase.database().ref("/").child(room_name).update(
    {
      purpose:"Adding Room Name"
    });     
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
