"use strict"

var db = require('../db-connection');
const Reviews = require('../Models/Reviews');

class ReviewsDB {

    getAllReviews(request, respond) {
        var sql = "SELECT * FROM res_review.reviews";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }

        });


    }
    addReviews(request, respond) {
        var now = new Date();
        var ReviewsObject = new Reviews (null, request.body.user_id, request.body.res_id, request.body.res_name,
            request.body.first_name, request.body.user_pic, request.body.rating,
            request.body.comment, now.toString());
        var sql = "INSERT INTO res_review.reviews (user_id, res_id, res_name, first_name, user_pic, rating, comment, date_posted) VALUES (?,?,?,?,?,?,?,?)";
        var values = [ReviewsObject.getUser_id(), ReviewsObject.getRes_id(), ReviewsObject.getRes_name(),
        ReviewsObject.getFirst_name(), ReviewsObject.getUser_pic(), ReviewsObject.getRating(), ReviewsObject.getComment(), ReviewsObject.getDate_posted()];

        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }

        });

    }
    updateReviews(request, respond) {
        var now = new Date();

        var ReviewsObject = new Reviews(request.params.review_id, request.body.user_id, request.body.res_id, request.body.res_name, request.body.first_name, request.body.user_pic, request.body.rating, 
            request.body.comment, now.toString());
            
        var sql = "UPDATE res_review.reviews SET rating = ?, comment = ?, date_posted= ? WHERE review_id = ?";
        var values = [ReviewsObject.getRating(), ReviewsObject.getComment(), ReviewsObject.getDate_posted(), ReviewsObject.getReview_id()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }
    deleteReviews(request, respond) {
        var reviewsID = request.params.review_id;
        var sql = "DELETE FROM res_review.reviews WHERE review_id = ?";
        db.query(sql, reviewsID, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }


}




module.exports = ReviewsDB;