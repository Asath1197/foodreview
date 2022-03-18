

function Register(){
    var credential = new Object();
    credential.first_name = document.getElementById("first_name").value;
    credential.last_name = document.getElementById("last_name").value;
    credential.userid = document.getElementById("user_id").value;
    credential.email_address = document.getElementById("email_address2").value;
    credential.password = document.getElementById("password2").value;
    credential.confirmPassword = document.getElementById("confirm_password").value;
    credential.mobile_number = document.getElementById("mobile_number").value;
    credential.address = document.getElementById("address").value;
    credential.gender = document.getElementsByName("genders").value;
    credential.user_pic = document.getElementById("myFile").value;

    
     var postCredential = new XMLHttpRequest();

     postCredential.open("POST","/register", true);

     postCredential.setRequestHeader("Content-Type", "application/json");
     postCredential.onload =function(){
        
   
         document.getElementById("registerForm").style.display="none";
         document.getElementById("message2").textContent="Registration Successful!";
         document.getElementById("loginForm").style.display="none";
         document.getElementById("welcome").className = "alert alert-success";
         document.getElementById('welcome').textContent="Thanks for registering and Welcome " + credential.userid+ " !";
         window.setTimeout(function () {
             $(".alert-success").fadeTo(500, 0).slideUp(500, function () {
                 $(this).remove();
             });
         }, 6000);  
         
         
   
    
         
     }

     postCredential.send(JSON.stringify(credential));

     
     

}