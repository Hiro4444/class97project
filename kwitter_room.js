var firebaseConfig = {
      apiKey: "AIzaSyCEuJ-GAsFAlNGr05xAmoN3p_fhU1KLnOo",
      authDomain: "kwitter-4b7fd.firebaseapp.com",
      databaseURL: "https://kwitter-4b7fd-default-rtdb.firebaseio.com",
      projectId: "kwitter-4b7fd",
      storageBucket: "kwitter-4b7fd.appspot.com",
      messagingSenderId: "1045005375139",
      appId: "1:1045005375139:web:54801859c9f461e82f9116"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name;
    function addRoom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name-"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}