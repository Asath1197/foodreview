/*function getRestaurantData() {
    var request = new XMLHttpRequest();

    request.open('GET', restaurant_url, true);
    //This command starts the calling of the restaurants api
    request.onload = function () {
        //get all the  restaurant records into our restaurants array
        restaurant_array = JSON.parse(request.responseText);

        fetchReviews();

    };

    request.send();
}
function displayCarousel() {
    
    var table = document.getElementById("restaurantTable");
    table.innerHTML="";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++)
        var res_pic = restaurant_array[count].res_pic;
    
    var Cell = '<div id="myCarousel" class="carousel slide" data-ride="carousel">' +
        '<ul class="carousel-indicators">' +
        '<li data-target="#myCarousel" data-slide-to"0" class="active"></li>' +
        '<li data-target="#myCarousel" data-slide-to"1" ></li>' +
        '<li data-target="#myCarousel" data-slide-to"2" ></li>' +
        '</ul>' +

        '<div class="carousel-inner">' +
        '<div class="carousel-item active">' +
        '<img src =' + res_pic + '>' +
        '</div>' +
        '<div class="carousel-item">'+
        '<img src =' + res_pic +'>'+
        '</div>'+

        '<a class="carousel-control-prev" href="myCarousel" data-slide="prev">'+
        '<span class="carousel-control-prev-icon"></span>'+
         '</a>'+
         '<a class="carousel-control-next" href="myCarousel" data-slide="next">'+
        '<span class="carousel-control-next-icon"></span>'+
         '</a>'+
        

        '</div>';
  table.insertAdjacentHTML('beforeend', Cell);
  document.getElementById("summary").textContent = "Restaurant Preveiw"
  document.getElementById("parent").textContent = "";

  


}*/

/*function displayCarousel(){

    var table = document.getElementById("restaurantTable");
    table.innerHTML ="";

   
   var cell = ' <div id="demo" class="carousel slide" data-ride="carousel">'+

  
  '<ul class="carousel-indicators">'+
    '<li data-target="#demo" data-slide-to="0" class="active"></li>'+
    '<li data-target="#demo" data-slide-to="1"></li>'+
    '<li data-target="#demo" data-slide-to="2"></li>'+
  '</ul>'+
  
  
  '<div class="carousel-inner">'+
    '<div class="carousel-item active">'+
      '<img src="images/restaurant/t-mala-hotspot.jpg" alt="Los Angeles" width="1100" height="500"class="center">'+
    '</div>'+
    '<div class="carousel-item">'+
      '<img src="images/restaurant/t-jaan.jpg" alt="Chicago" width="1100" height="500" class="center">'+
    '</div>'+
    '<div class="carousel-item">'+
      '<img src="images/restaurant/t-korean-fusion.jpg" alt="New York" width="1100" height="500" class="center">'+
    '</div>'+
  '</div>'+
  
  
  '<a class="carousel-control-prev" href="#demo" data-slide="prev">'+
    '<span class="carousel-control-prev-icon"></span>'+
  '</a>'+
'<a class="carousel-control-next" href="#demo" data-slide="next">'+
    '<span class="carousel-control-next-icon"></span>'+
  '</a>'+
'</div>';

table.insertAdjacentHTML('beforeend', cell);
document.getElementById("summary").textContent = "Preview";
document.getElementById("parent").textContent = '';
 


}

function listHome(){
    displayCarousel();
    document.getElementById("homeMenu").classList.add("active");
    document.getElementById("mainMenu").classList.remove("active")
    
}*/

