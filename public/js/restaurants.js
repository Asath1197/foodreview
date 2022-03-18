function getRestaurantData() {
    var request = new XMLHttpRequest();

    request.open('GET', restaurant_url, true);
    //This command starts the calling of the restaurants api
    request.onload = function () {
        //get all the  restaurant records into our restaurants array
        restaurant_array = JSON.parse(request.responseText);

        fetchReviews();
        getUserDetail();

    };

    request.send();
}
function displayMovie(data) {
    var table = document.getElementById("restaurantTable");
    table.innerHTML="";
    
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        var res_pic = restaurant_array[count].res_pic;
        var res_name = restaurant_array[count].res_name;
        var cell = '<div class="col-md-3" style="float: none; margin: 0 auto; clear: left; id="table">' +
            '<ul>  '+
            '<div  class="flip-container " >' +
            '<div class="flipper">' +
            '<div class="front">' +
            '<a id="res" href="#" data-toggle="modal" data-target="#restaurantModal"  item=' + count + '>' +
            '<img class="img-fluid img-thumbnail" src=' + res_pic + ' />' +
            '</a>' +
            '</div>' +
            '<div class="back">' +
            '<div  class="bg-dark mystyle text-center py-3" >' +
            '<span>' + res_name + '</span><br>' +
            '<button  href="#" data-toggle="modal" data-target="#restaurantModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showRestaurantDetails(this)" >See More</button>' +
            '<button href="#" data-toggle="modal" data-target="#reviewModal" item="' + count + '" type="button" class="btn btn-primary btn-sm" onClick="showRestaurantReviews(this)" >Reviews</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</ul>' +
            
            '</div >';
            

        table.insertAdjacentHTML('beforeend', cell);
        document.getElementById("summary").textContent = " All Restaurants"
        document.getElementById("parent").textContent = "";
        document.getElementById("demo").textContent ="";
        
        
        
        



    }
    
    


}



function listMainManu() {
    displayMovie();
    document.getElementById("mainMenu").classList.add("active");
    document.getElementById("homeMenu").classList.remove("active")

}



function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("res_name").textContent = restaurant_array[item].res_name;
    document.getElementById("res_pic").src = restaurant_array[item].res_pic;
    document.getElementById("aboutres").textContent = restaurant_array[item].about;
    document.getElementById("location").textContent = restaurant_array[item].location;
    document.getElementById("open_hour").textContent = restaurant_array[item].open_hour;
    

}
function reserveNow() {
    window.open(restaurant_array[currentIndex].reserve, "_blank");
}
 




