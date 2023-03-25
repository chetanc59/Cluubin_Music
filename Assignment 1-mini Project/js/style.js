
function printvalue(){
  alert("Welcome to clubbin");
  }
// donate options

  // Login form
  function validation(){
    var user = document.getElementById('user').value;
    var key = document.getElementById('key').value;

    if(user == ""){
         document.getElementById('error1').innerHTML = "Please Enter Your Email-Id";
         return false; 
    } 

    else if (key == ""){
      document.getElementById('error2').innerHTML = "Please Enter The Password !";

      return false;
    }
    else if (key == "Password"){
      return true;
    }
    else{
      return true;
    }

  }

  // signup page

  function validation_2(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var pass = document.getElementById('pass').value;
    var confirm = document.getElementById('confirm').value;

    
    if (username == ""){
      document.getElementById('error3').innerHTML = "Please Enter The Username";

      return false;
    }

    else if(email == ""){
      document.getElementById('error4').innerHTML = "Please Enter Your Email-Id";
      return false;
    }
    else if(mobile == ""){
      document.getElementById('error5').innerHTML = "Please Enter Your Mobile-No.";

      return false;
    }

     else if (mobile.length < "10"){
      document.getElementById('error5').innerHTML = "Please Enter The 10 digit number";

      return true;
    }

    else if (pass == ""){
      document.getElementById('error6').innerHTML = "Please Enter Your Password";
      return false;
    }

    else if (pass == "Password"){
      return true;
    }

    else if (confirm == ""){
      document.getElementById('error7').innerHTML = "Please Enter The Confirm-Password";
      return false;
    }

    else if (confirm != "Password"){
      document.getElementById('error7').innerHTML = "Please Enter The Same Password";
      return false;
    }

    else{
      return true;
    }
  }

  //jquery signup code
  $(document).ready(function(){
   $('#validate').validation(
    rules:{
      username: "required",
      email: "required",
      city:  "required"
    }

    message:{
      username:'please enter your name',
      email: 'please enter your email',
      mobileno: 'please enter your mobile no.'
    }
    );
  });