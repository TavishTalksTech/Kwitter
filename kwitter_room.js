var firebaseConfig = {
      apiKey: "AIzaSyDhAQ7_m6nBZS_iCFp_540ZZ6A0Kf-RkFY",
      authDomain: "kwitter-fd18b.firebaseapp.com",
      databaseURL: "https://kwitter-fd18b-default-rtdb.firebaseio.com",
      projectId: "kwitter-fd18b",
      storageBucket: "kwitter-fd18b.appspot.com",
      messagingSenderId: "72526445868",
      appId: "1:72526445868:web:4ee7c86d12913fde020089"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name;

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room name - " + room_name);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerhtml += row;
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}