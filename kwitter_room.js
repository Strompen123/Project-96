const firebaseConfig = {
      apiKey: "AIzaSyAGSZN2psm_LpgZ9d8ZtKfHnHXtAgls78c",
      authDomain: "test-e82e9.firebaseapp.com",
      databaseURL: "https://test-e82e9-default-rtdb.firebaseio.com",
      projectId: "test-e82e9",
      storageBucket: "test-e82e9.appspot.com",
      messagingSenderId: "127979704364",
      appId: "1:127979704364:web:b8e9a0225c1865eebd8189",
      measurementId: "G-LXCBKWDC4W"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value ;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
   
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname#"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}