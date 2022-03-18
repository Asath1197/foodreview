function fetchReviews(){
    var request = new XMLHttpRequest();

    request.open('GET',review_url,true);

    request.onload =function(){
        review_array = JSON.parse(request.responseText);
    };
    request.send();
}
function showRestaurantReviews(element){
    document.getElementById("emptyReview").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;

    document.getElementById("review").textContent = "Review for " + restaurant_array[item].res_name;
    document.getElementById("reviewBody").textContent="";

    for (var i = 0;i < review_array.length; i++){
        if(review_array[i].res_name==restaurant_array[item].res_name){
            document.getElementById("emptyReview").innerHTML ="";
            selectedRestaurantId = restaurant_array[item]._id;
            star = "";
            var html = '<div class="text-center" style="width:100%;" class="img-container">                                                           \
                            <div class="card" >                                                                                  \
                                <div class="card-body" >     \
                                <img class="img-round" src = "images/user1.jpeg" style="width:130px;height:130px;margin-right:15px;" >            \                                                                    \
                                    <p class="card-text" class="img-container" id="rating' + i + '"> ' + review_array[i].comment + "</p>               \
                                    <small>by " + review_array[i].first_name + " @ " + review_array[i].date_posted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("reviewBody").insertAdjacentHTML('beforeend', html);

            var star="";
            for(var j = 0; j < review_array[i].rating; j++){
                console.log(i);
                star += "<img src='images/star.png' style = 'width:50px' />";
            
            }
            star +="<img src='images/delete.png' class='edit' data-dismiss='modal' item='"+ i + "' onClick='deleteReview(this)' />";
            star +="<img src='images/edit.png' class='edit' data-toggle='modal' data-target = '#editReviewModal' data-dismiss='modal' item='"
            + i + "' onClick='editReview(this)' />";

            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");

        }
    }
}
function newReview(){
    rating = 0;
    document.getElementById("userReviews").value =  "";
    document.getElementById("first_name2").value ="";
}
function addReview() {
    var review = new Object();
    review.user_id = user_array[currentIndex]._id;
    review.res_id = restaurant_array[currentIndex].res_id;
    review.res_name = restaurant_array[currentIndex].res_name;
    review.first_name = document.getElementById("first_name2").value;
    review.comment = document.getElementById("userReviews").value;
    review.date_posted = null;
    review.rating = rating;

    var postReview = new XMLHttpRequest();
    postReview.open("POST" ,review_url, true);
    postReview.setRequestHeader("Content-Type", "application/json");
    postReview.onload = function(){
        fetchReviews();

    };

    postReview.send(JSON.stringify(review));
    
}
function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    for (let star of stars){
        star.setAttribute("src", starBWImage);
    }
    changestarImage(num, classTarget);
}
function changestarImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starImage);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", starImage);
            rating = 5;
            break;
    }
}
function editReview(element){
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("editfirst_name").value = review_array[item].first_name;
    document.getElementById("edituserReviews").value = review_array[item].comment;
    console.log(review_array[item].rating);
    displayColorStar('editpop', review_array[item].rating);
}
function displayColorStar(classname,num){
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    for (let p of pop){
        p.setAttribute("src",starBWImage);
    }
    changestarImage(num, classTarget);
}
function updateReview(){
    var response = confirm("Are you sure you want to update this Review?");

    if (response == true){
        var edit_review_url = review_url + "/"+ review_array[currentIndex]._id;
        var updateReview = new XMLHttpRequest();

        updateReview.open("PUT", edit_review_url,true);
        updateReview.setRequestHeader("content-Type", "application/json");
        review_array[currentIndex].first_name=document.getElementById("editfirst_name").value;
        review_array[currentIndex].comment=document.getElementById("edituserReviews").value;
        updateReview.onload = function(){
            fetchReviews();
        };
        updateReview.send(JSON.stringify(review_array[currentIndex]));
        
    }
}
function deleteReview(element){
    var response = confirm("Are you sure you want to delete this Review ?");

    if (response == true){
        var item = element.getAttribute("item");
        var delete_review_url = review_url + "/" + review_array[item].review_id;
        var eraseReview = new XMLHttpRequest();
        eraseReview.open("DELETE", delete_review_url,true);
        eraseReview.onload = function(){
            fetchReviews();
        };
        eraseReview.send();
    }
}
