"use strict"

var db = require('../db-connection');
const Users = require('../models/Users')

class UsersDB {
    
    getLoginCredentials(request, respond){
        var userid = request.body.userid;
        var password = request.body.password;
        var msg = "";

        var sql ="SELECT password FROM res_review.users WHERE userid = ?";

        db.query(sql, [userid],function (error,result){
            if (error){
                throw error;

            }
            else{
                if(result.length > 0){
                    if(password == result[0].password ){
                        msg = "Login Successfull!";
                        console.log(msg);
                    }
                    else{
                        msg = "Login Failed!";
                        console.log(msg);
                    }
                }
                else{
                    msg = "User id not found!";
                    console.log(msg);
                }
                respond.json(prepareMessage(msg));
            }
        });

        
    }
    
    getLoginInfo(request, respond) {
        var sql = "SELECT password, userid FROM res_review.users";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }
    getAlluserinfo(request, respond) {

        var sql = "SELECT * FROM res_review.users";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }

        });
    }
    addUsers(request, respond) {
        var userObject = new Users(null, request.body.userid, request.body.user_pic, request.body.first_name, request.body.last_name,
            request.body.password, request.body.email_address, request.body.mobile_number, request.body.address, request.body.gender);
        var sql = "INSERT INTO res_review.users (userid,user_pic,first_name, last_name, password, email_address,mobile_number, address, gender) VALUES (?,?,?,?,?,?,?,?,?)";

        var values = [userObject.getUserid(), userObject.getUser_pic(), userObject.getFirst_name(), userObject.getLast_name(), userObject.getPassword(), userObject.getEmail_address(),
        userObject.getMobile_number(), userObject.getAddress(), userObject.getGender()];

        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            }
            else {
                respond.json(result);
            }
        });
    }
    // updateUsers(request, respond) {
    //    var userObject = new Users(request.params.id, request.body.userid, request.body.user_pic, request.body.first_name, request.body.last_name,
    //        request.body.password, request.body.email_address, request.body.mobile_number, request.body.address, request.body.gender);

    //    var sql = "UPDATE res_review.users SET userid = ?, user_pic = ?, first_name = ?, last_name = ?, password = ?, email_address = ?, mobile_number = ?, address = ?, gender = ? WHERE _id = ?";


    //    var values = [userObject.getUserid(), userObject.getUser_pic(), userObject.getFirst_name(), userObject.getLast_name(),
    //    userObject.getPassword(), userObject.getEmail_address(), userObject.getMobile_number(), userObject.getAddress(), userObject.getGender(), userObject.getId()];


    //   db.query(sql, values, function (error, result) {
    //       if (error) {
    //            throw error;
    //       }
    //        else {
    //            respond.json(result);
    //        }
    //   });
    //}

    deleteUsers(request, respond) {
        var userID = request.params.id;
        var sql = "DELETE FROM res_review.users WHERE _id = ?";
        db.query(sql, userID, function (error, result) {
            if (error) {
                throw error;

            }
            else {
                respond.json(result);
            }
        });
    }
}
function prepareMessage(msg){
    var obj = {"message": msg};
    return obj;
}

module.exports = UsersDB;
