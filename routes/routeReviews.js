"use strict"

const reviewsdb = require('../Models/ReviewsDB');


var reviewsDBObject = new reviewsdb();

function routeReviews(app){
    app.route('/reviews')
      .post(reviewsDBObject.addReviews)
      .get(reviewsDBObject.getAllReviews);
    app.route('/reviews/:review_id')
      .delete(reviewsDBObject.deleteReviews)
      .put(reviewsDBObject.updateReviews);
}
module.exports={routeReviews};