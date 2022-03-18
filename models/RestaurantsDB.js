"use strict"
var db = require('../db-connection');

class RestaurantsDB {
    getAllRestaurants(request, respond) {
        var sql = "SELECT * FROM res_review.restaurants";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }
}

module.exports = RestaurantsDB;