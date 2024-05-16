function validate(){
  var a = document.getElementById("username").value;
  var p = document.getElementById("password").value;
  if(a==""&& p==""){
    alert('fill the login page');
    document.getElementById("username").style.border = "2px solid red";
    document.getElementById("password").style.border = "2px solid red";
  }
  else if( p==""){
    
    alert("plz enter the password");
    document.getElementById("password").style.border = "2px solid red";
  }

  else if(a==""){
    alert("plz enter the username");
    document.getElementById("username").style.border = "2px solid red";
  }
  
  else if(a=="abcd" && p == 1234){
    alert("suceessfully submitted...");
    window.location = "home.html";
  }
  else if(a=="abcd" && p != 1234){
    alert("wrong password...");
    document.getElementById("password").style.border = "2px solid red";
  }
  else if(a!="abcd" && p == 1234){
    alert("invalid username");
    document.getElementById("username").style.border = "2px solid red";


  }
  else{
    alert('invalid username and password');
    document.getElementById("username").style.border = "2px solid red";
    document.getElementById("password").style.border = "2px solid red";

  }
  

}