
firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    // User is signed in.
    if( document.getElementById("user_div")!=null) document.getElementById("user_div").style.display = "block";
    if( document.getElementById("login_div")!=null) document.getElementById("login_div").style.display = "none";
    document.getElementById("SITE_HEADERinlineContent").style.display = "none";
    
    

    var user = firebase.auth().currentUser;

    if(user != null){
      
      var email_id = user.email;
      var rootref = firebase.database().ref().child("Types");
      rootref.on('child_added', function(snap) {
        var name = snap.child("Email").val();
        var typer = snap.child("type").val();
        if(name==email_id){
          if(typer=="company"){
             document.getElementById("SITE_HEADERinlineContent1").style.display = "block";
             document.getElementById("SITE_HEADERinlineContent2").style.display = "none";
          }else{
             document.getElementById("SITE_HEADERinlineContent1").style.display = "none";
             document.getElementById("SITE_HEADERinlineContent2").style.display = "block";
          }
        }
    });
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.*/

  if( document.getElementById("user_div")!=null) document.getElementById("user_div").style.display = "none";
  if( document.getElementById("login_div")!=null)  document.getElementById("login_div").style.display = "block";
    document.getElementById("SITE_HEADERinlineContent").style.display = "block";
    document.getElementById("SITE_HEADERinlineContent1").style.display = "none";
    document.getElementById("SITE_HEADERinlineContent2").style.display = "none";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
 
 /* firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("Error : " + errorMessage);
  // ...
});*/

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(userEmail, userPass);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
 

}

function registeruser(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  var username = document.getElementById("name_field").value;
  var userlastname = document.getElementById("lastname_field").value;
  var usertel = document.getElementById("tel_field").value;
  var userresume = document.getElementById("resume_field").value;

 firebase.database().ref('users/').push().set({
    username: username,
    Lastname: userlastname,
    email: email,
    telphone: usertel,
    resume : userresume
  });

 firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
   window.alert("Error : " + errorMessage);
});

}

function registercompany(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  var username = document.getElementById("name_field").value;
  var userlastname = document.getElementById("lastname_field").value;
  var usertel = document.getElementById("tel_field").value;
  var userresume = document.getElementById("url_field").value;
  var addvalue = document.getElementById("add_field").value;
  var descp =   document.getElementById("desc_field").value;
 firebase.database().ref('company/').push().set({
    companyname: username,
    country: userlastname,
    address: addvalue,
    email: userEmail,
    telphone: usertel,
    Description: descp,
    Website: userresume
  });


 firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
   window.alert("Error : " + errorMessage);
});

}

function logout(){
  firebase.auth().signOut();
}
