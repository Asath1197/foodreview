"use strict";

class Reviews {
    constructor(review_id, user_id, res_id, res_name, first_name, user_pic, rating, comment, date_posted) {
        this.review_id = review_id;
        this.user_id = user_id;
        this.res_id = res_id;
        this.res_name = res_name;
        this.first_name = first_name;
        this.user_pic = user_pic;
        this.rating = rating;
        this.comment = comment;
        this.date_posted = date_posted;

    }

    getReview_id(){
        return this.review_id;
    }
    getUser_id(){
        return this.user_id;
    }
    getRes_id(){
        return this.res_id;
    }
    getRes_name(){
        return this.res_name;
    }
    getFirst_name(){
        return this.first_name;
    }
    getUser_pic(){
        return this.user_pic;
    }
    getRating(){
        return this.rating;
    }
    getComment(){
        return this.comment;
    }
    getDate_posted(){
        return this.date_posted;
    }
    setUser_id(){
        this.user_id = user_id;
    }
    setRes_id(){
        this.res_id = res_id;
        
    }
    setRes_name(res_name){
        this.res_name = res_name;
    }
    setFirst_name(first_name){
        this.first_name = first_name;
    }
    setUser_pic(user_pic){
        this.user_pic = user_pic;
    }
    setRating(rating){
        this.rating = rating;
    }
    setComment(comment){
        this.comment = comment;
    }
    setDate_posted(date_posted){
        this.date_posted = date_posted;
    }
}

module.exports = Reviews;