"use strict"

const usersdb = require('../models/UsersDB');
var UsersDBObject = new usersdb();

function routeUsers(app) {
    app.route('/login')
        .get(UsersDBObject.getLoginInfo)
        .post(UsersDBObject.getLoginCredentials);
    app.route('/user')
        .get(UsersDBObject.getAlluserinfo);
    app.route('/register')
        .post(UsersDBObject.addUsers);
    app.route('/delete/:id')
        .delete(UsersDBObject.deleteUsers);
    
    //app.route('/update/:id')
    //   .put(UsersDBObject.updateUsers);

}
module.exports = { routeUsers };
