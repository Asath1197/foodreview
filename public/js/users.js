function getUserDetail(){
    var request = new XMLHttpRequest();

    request.open('GET',user_url,true);

    request.onload =function(){
        user_array = JSON.parse(request.responseText);
    };
    request.send();
    
}