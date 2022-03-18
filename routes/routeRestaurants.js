"use strict"

const restaurantsdb = require('../Models/RestaurantsDB');

var restaurantsDBObject = new restaurantsdb();

function routeRestaurants(app){
    app.route('/restaurants').get(restaurantsDBObject.getAllRestaurants);
}
module.exports = {routeRestaurants};