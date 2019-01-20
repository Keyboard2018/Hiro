function myFunctionbr(){
   
    var rootref = firebase.database().ref().child("offers");
      
      rootref.on('child_added', function(snap) {
        var name = snap.child("Jobtitle").val();
        var typer = snap.child("Company").val();
        var des = snap.child("Description").val();
       
        
      var user = firebase.auth().currentUser;

    if(user != null){
      
      var email_id = user.email;
      var rootref = firebase.database().ref().child("Types");
        rootref.on('child_added', function(snap) {
        var namers = snap.child("Email").val();
        var typer = snap.child("type").val();
        if(namers==email_id){
          if(typer=="company"){
           $("#tablebrahim").append("<tr><td>"+name+"</td><td>"+typer+"</td><td>"+des+"</td><td>"+'<a href="res.html">here</a>'+"</td></tr>");
            
          }else{
           $("#tablebrahim").append("<tr><td>"+name+"</td><td>"+typer+"</td><td>"+des+"</td><td>"+'<a href="chatbot.html">here</a>'+"</td></tr>");
          }
        }
    });

    }






    }); 
}



firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    // User is signed in.
    if( document.getElementById("user_div")!=null) document.getElementById("user_div").style.display = "block";
    if( document.getElementById("login_div")!=null) document.getElementById("login_div").style.display = "none";
    if( document.getElementById("SITE_HEADERinlineContent")!=null) document.getElementById("SITE_HEADERinlineContent").style.display = "none";
    
    

    var user = firebase.auth().currentUser;

    if(user != null){
      
      var email_id = user.email;
      var rootref = firebase.database().ref().child("Types");
      rootref.on('child_added', function(snap) {
        var name = snap.child("Email").val();
        var typer = snap.child("type").val();
        if(name==email_id){
          if(typer=="company"){
            if( document.getElementById("SITE_HEADERinlineContent1")!=null) document.getElementById("SITE_HEADERinlineContent1").style.display = "block";
            if( document.getElementById("SITE_HEADERinlineContent2")!=null) document.getElementById("SITE_HEADERinlineContent2").style.display = "none";
            if( document.getElementById("comp-jggjmiyg")!=null) document.getElementById("comp-jggjmiyg").style.display = "block";
            
          }else{
            if( document.getElementById("SITE_HEADERinlineContent1")!=null) document.getElementById("SITE_HEADERinlineContent1").style.display = "none";
            if( document.getElementById("SITE_HEADERinlineContent2")!=null) document.getElementById("SITE_HEADERinlineContent2").style.display = "block";
            if( document.getElementById("comp-jggjmiyg")!=null) document.getElementById("comp-jggjmiyg").style.display = "none";
          }
        }
    });
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.*/

  if( document.getElementById("user_div")!=null) document.getElementById("user_div").style.display = "none";
  if( document.getElementById("login_div")!=null)  document.getElementById("login_div").style.display = "block";
  if( document.getElementById("SITE_HEADERinlineContent")!=null)  document.getElementById("SITE_HEADERinlineContent").style.display = "block";
  if( document.getElementById("SITE_HEADERinlineContent1")!=null)  document.getElementById("SITE_HEADERinlineContent1").style.display = "none";
  if( document.getElementById("SITE_HEADERinlineContent2")!=null)  document.getElementById("SITE_HEADERinlineContent2").style.display = "none";
  if( document.getElementById("comp-jggjmiyg")!=null) document.getElementById("comp-jggjmiyg").style.display = "none";
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

  firebase.database().ref('Types/').push().set({
    Email: userEmail,
    type: "user"
  });

 firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
   window.alert("Error : " + errorMessage);
});

}

function addoffernew(){


  var username = document.getElementById("name_field").value;
  var userresume = document.getElementById("url_field").value;
  var addvalue = document.getElementById("add_field").value;
  var descp =   document.getElementById("desc_field").value;
  var codescp =   document.getElementById("comdesc_field").value;

 firebase.database().ref('offers/').push().set({
    Jobtitle: username,
    address: addvalue,
    Description: descp,
    Company: codescp,
    Website: userresume,
    applicants: ""
  });
 
  window.location.href = "offers.html";
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

  firebase.database().ref('Types/').push().set({
    Email: userEmail,
    type: "company"
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

var loadingMsgIndex,
  botui = new BotUI('api-bot');
var response;
var action;
var userResp = 'pstart';
var profValues = [];
var x;
var intent;
var profResult = [];

// Initialize Firebase
/*var config = {
  apiKey: "AIzaSyA7aY_45BlXIQx01bZ5YU6MZIaFmqT8n7U",
  authDomain: "zac-ihbafd.firebaseapp.com",
  databaseURL: "https://zac-ihbafd.firebaseio.com",
  projectId: "zac-ihbafd",
  storageBucket: "zac-ihbafd.appspot.com",
  messagingSenderId: "326295517113"
};
firebase.initializeApp(config);

var database = firebase.database();*/


fStart();
firstTest();


//profilingTest();



function sendResp() {
  setTimeout(function() {

    loadingMsgIndex = botui.message.bot({
      delay: 500,
      loading: true
    }).then(function(index) {
      loadingMsgIndex = index;
      botui.message
        .update(loadingMsgIndex, {
          delay: 1500,
          content: response

        });
    });

  }, 1500);
  return;
}

function pStart() {

  $.ajax({
    url: 'https://api.dialogflow.com/v1/query?v=20150910&query=pstart&lang=en&sessionId=1',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer 60d363afe030470bbe60ed2edaef60da")
    },
    success: function(data) {

      response = data.result.fulfillment.messages[0].speech;
      intent = data.result.metadata.intentName;
      console.log(response);

      //process the JSON data etc
    }
  });
  setTimeout(function() {
    //your code to be executed after 1

    botui.message.bot({
      delay: 1500,
      content: response
    });


  }, 1000);

  return;
}


function profilingTest() {

  return botui.action.text({
    delay: 1500,
    action: {
      placeholder: 'Say something...'
    }
  }).then(function(res) {

    if (!isNaN(res.value)) {

      if (res.value >= 1 && res.value <= 5) {
        $.ajax({
          url: 'https://api.dialogflow.com/v1/query?v=20150910&query=' + res.value + '&lang=en&sessionId=1',
          beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Bearer 60d363afe030470bbe60ed2edaef60da")
          },
          success: function(data) {

            response = data.result.fulfillment.messages[0].speech;
            x = data.result.fulfillment.messages[0].speech;
            if (intent != data.result.metadata.intentName) {
              intent = data.result.metadata.intentName
              profValues.push(res.value);
              ////alert(profValues);
            } else {
              intent = data.result.metadata.intentName;
            }
            ////alert(profValues);

            ////alert(data.result.metadata.intentName);
          }
        });
      } else {

        response = "Please enter a number between 1 and 5.\n\n\n" + x;
      }
    } else {
      $.ajax({
        url: 'https://api.dialogflow.com/v1/query?v=20150910&query=' + res.value + '&lang=en&sessionId=1',
        beforeSend: function(xhr) {
          xhr.setRequestHeader("Authorization", "Bearer 60d363afe030470bbe60ed2edaef60da")
        },
        success: function(data) {

          response = data.result.fulfillment.messages[0].speech;
          x = response;
          //action = data.result.action;
        }
      });
    }


    setTimeout(function() {

      loadingMsgIndex = botui.message.bot({
        delay: 500,
        loading: true
      }).then(function(index) {
        loadingMsgIndex = index;
        botui.message
          .update(loadingMsgIndex, {
            delay: 1500,
            content: response

          }).then(function() {
            //alert (y);
            if (profValues.length == 32) {
              var ie, sn, ft, jp;
              ie = 30 - profValues[2] - profValues[6] - profValues[10] + profValues[14] - profValues[18] + profValues[22] + profValues[26] - profValues[30];
              sn = 12 + profValues[3] + profValues[7] + profValues[11] + profValues[15] + profValues[19] - profValues[23] - profValues[27] + profValues[31];
              ft = 30 - profValues[1] + profValues[5] + profValues[9] - profValues[13] - profValues[17] + profValues[21] - profValues[25] - profValues[29];
              jp = 18 + profValues[0] + profValues[4] - profValues[8] + profValues[12] - profValues[16] + profValues[20] - profValues[24] + profValues[28];
              if (ie >= 24) {
                profResult.push("extroverted")
              } else {
                profResult.push("introverted");
              }
              if (sn >= 24) {
                profResult.push("intuitive")
              } else {
                profResult.push("sensing");
              }
              if (ft >= 24) {
                profResult.push("thinking")
              } else {
                profResult.push("feeling");
              }
              if (jp >= 24) {
                profResult.push("perceiving")
              } else {
                profResult.push("judging");
              }

              ////alert(profResult);
             // var resultString = ''.join(profResult);

              /*firebase.database().ref('/offers/offerId/userId/').set({
                profilingResult: resultString,
              });*/
                /*9 firebase.database().ref('/result').push().set({
              profilingResult: resultString,
                yearsExperience: yearsExperience,
                     languages: languages,
                relocateAnswer: relocateAnswer,
                 distTravel: distTravel
                 });*/


              botui.message.add({
                delay: 500,
                content: resultString
              });
              return botui.action.text({ // show 'text' action
                action: {
                  placeholder: 'Say firstQsomething!'
                }
              });
            } else {
              profilingTest();
            }
          });
      });

    }, 1500);

  });

}


/*function fStart() {
  botui.message.bot({
    delay: 500,
    content: 'Hello, I am ZAC, together we will lead the best interview experience.\n\nPlease note that honesty in this interview is of a fundamental importance, providing incorrect information will result in disqualification later on in the process.'
  });

  $.ajax({
    url: 'https://api.dialogflow.com/v1/query?v=20150910&query=fstart&lang=en&sessionId=1',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer 60d363afe030470bbe60ed2edaef60da")
    },
    success: function(data) {

      response = data.result.fulfillment.messages[0].speech;
      intent = data.result.metadata.intentName;
      console.log(response);

      //process the JSON data etc
    }
  });
  setTimeout(function() {
    //your code to be executed after 1

    botui.message.bot({
      delay: 800,
      content: response
    });


  }, 800);


}*/




function firstTest() {

  return botui.action.text({
    delay: 1500,
    action: {
      placeholder: 'Say something...'
    }
  }).then(function(res) {

    $.ajax({
      url: 'https://api.dialogflow.com/v1/query?v=20150910&query=' + res.value + '&lang=en&sessionId=1',
      beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", "Bearer 60d363afe030470bbe60ed2edaef60da")
      },
      success: function(data) {


        console.log(response);
        //x = data.result.fulfillment.messages[0].speech;
        intent = data.result.metadata.intentName;
        var params = data.result.parameters;
        ////alert(intent);

        if (intent == "firstQ-2") {

          if (params.duration == "" && params.number == "") {



            $.ajax({
              url: 'https://api.dialogflow.com/v1/query?v=20150910&event=firstq2&lang=en&sessionId=1',
              beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Bearer 60d363afe030470bbe60ed2edaef60da")
              },
              success: function(data) {
                intent = data.result.metadata.intentName;
                ////alert(intent);
              }
            });

            response = "Please enter a valid answer\n\n" + x;

          } else {
            ////alert(params.number);
            if (params.number == "") {
              var yearsExperience = params.duration.amount;
            } else {
              var yearsExperience = params.number;
            }
            ////alert(yearsExperience);

            response = data.result.fulfillment.messages[0].speech;
            x = data.result.fulfillment.messages[0].speech;
          }

        } else if (intent == "firstQ-3") {

          var listLang = params.language;
          ////alert(listLang);
          if (listLang.length == 0) {

            $.ajax({
              url: 'https://api.dialogflow.com/v1/query?v=20150910&event=firstq3&lang=en&sessionId=1',
              beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Bearer 60d363afe030470bbe60ed2edaef60da")
              },
              success: function(data) {
                intent = data.result.metadata.intentName;
                ////alert(intent);
              }
            });

            response = "Please enter a valid answer\n\n" + x;

          } else {
            ////alert(params.number);
            var languages = listLang.toString();
            ////alert(languages);
            response = data.result.fulfillment.messages[0].speech;
            x = data.result.fulfillment.messages[0].speech;
          }

        } else if (intent == "firstQ-4") {

          var relocateAnswer = res.value;
          ////alert(relocateAnswer);
          response = data.result.fulfillment.messages[0].speech;
          x = data.result.fulfillment.messages[0].speech;

        } else if (intent == "firstQ-4 - yes - travel") {

          ////alert(params.number);
          if (params.number == "" && params.length == "") {

            $.ajax({
              url: 'https://api.dialogflow.com/v1/query?v=20150910&event=firstq3&lang=en&sessionId=1',
              beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Bearer 60d363afe030470bbe60ed2edaef60da")
              },
              success: function(data) {
                intent = data.result.metadata.intentName;
                ////alert(intent);
              }
            });

            response = "Please enter a valid answer\n\n" + x;

          } else {
            ////alert(params.number);

            if (params.number == "") {
              var distTravel = params.length.amount;
            } else {
              var distTravel = params.number;
            }

            //alert(distTravel);
            response = data.result.fulfillment.messages[0].speech;
            x = data.result.fulfillment.messages[0].speech;
          }

        } else if (intent == "firstQ-5") {
          if (params.number == "" && params.duration == "") {

            $.ajax({
              url: 'https://api.dialogflow.com/v1/query?v=20150910&event=firstq3&lang=en&sessionId=1',
              beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Bearer 60d363afe030470bbe60ed2edaef60da")
              },
              success: function(data) {
                intent = data.result.metadata.intentName;
                ////alert(intent);
              }
            });

            response = "Please enter a valid answer\n\n" + x;

          } else {
            ////alert(params.number);

            if (params.number == "") {
              var workHours = params.duration.amount;
            } else {
              var workHours = params.number;
            }

            ////alert(workHours);
            response = data.result.fulfillment.messages[0].speech;
            x = data.result.fulfillment.messages[0].speech;
          }
        } else if (intent == "firstQ-6") {
          var motivation = res.value;
          response = data.result.fulfillment.messages[0].speech;
          x = data.result.fulfillment.messages[0].speech;

        } else if (intent == "firstQ-7") {
          var strength = res.value;
          response = data.result.fulfillment.messages[0].speech;
          x = data.result.fulfillment.messages[0].speech;
        } else if (intent == "firstQ-8") {
          var weakness = res.value;
          response = data.result.fulfillment.messages[0].speech;
          x = data.result.fulfillment.messages[0].speech;
        } else {
          response = data.result.fulfillment.messages[0].speech;
          x = data.result.fulfillment.messages[0].speech;
        }

        ////alert(profValues);

        ////alert(data.result.metadata.intentName);
      }
    });

    setTimeout(function() {

      loadingMsgIndex = botui.message.bot({
        delay: 500,
        loading: true
      }).then(function(index) {
        loadingMsgIndex = index;
        botui.message
          .update(loadingMsgIndex, {
            delay: 500,
            content: response

          }).then(function() {


            if (intent == "firstQ-8") {


              pStart();
              profilingTest();
            } else {
              firstTest();
            }
          });
      });

    }, 1500);

  });

}


function fStart() {
  botui.message.bot({
    delay: 500,
    content: 'Hello, I am ZAC, together we will lead the best interview experience.\n\nPlease note that honesty in this interview is of a fundamental importance, providing incorrect information will result in disqualification later on in the process.'
  });

  $.ajax({
    url: 'https://api.dialogflow.com/v1/query?v=20150910&query=fstart&lang=en&sessionId=1',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer 60d363afe030470bbe60ed2edaef60da")
    },
    success: function(data) {

      response = data.result.fulfillment.messages[0].speech;
      x = data.result.fulfillment.messages[0].speech;
      intent = data.result.metadata.intentName;
      console.log(response);

      //process the JSON data etc
    }
  });
  setTimeout(function() {
    //your code to be executed after 1

    botui.message.bot({
      delay: 800,
      content: response
    });


  }, 800);



}
