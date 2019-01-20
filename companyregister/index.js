firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

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
