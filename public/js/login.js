var response = "";

function login() {
    var credentials = new Object();
    credentials.userid = document.getElementById("userid").value;
    credentials.password = document.getElementById("password").value;
    var request = new XMLHttpRequest();
    request.open("POST", "/login", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
       
        response = JSON.parse(request.responseText);
        document.getElementById("loginForm").style.display = "none";
            document.getElementById("message").textContent = response.message;
            document.getElementById("registerForm").textContent="";
            document.getElementById("welcome").className = "alert alert-success";
            document.getElementById('welcome').textContent="Login Successful ! Welcome " + credentials.userid+ " !";
            document.getElementById('dropdownMenu1').textContent="Logout";
            
           
            window.setTimeout(function () {
                $(".alert-success").fadeTo(500, 0).slideUp(500, function () {
                    $(this).remove();
                });
            }, 6000);  
        

           

          
    };
    request.send(JSON.stringify(credentials));
}

