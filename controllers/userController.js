"use strict"


const User = require('../models/Users');
const UserDB = require('../models/UsersDB');

var userDB = new UserDB();
 


function authenticate(request, respond){
    var userid= request.body.userid;
    var password = request.body.password;
    var msg = "";

    userDB.getLoginCredentials(userid,function(error, result){
        if(error){
            respond.json(error);
            
        } else {
            if (result.length > 0){
                if (password == result[0].password){
                    msg = "1"; //"Success";
                    console.log(msg);
                } else {
                    msg = "FAIL!";
                    console.log(msg);
                }
            }else {
                msg = "User not Found!";

            }
            respond.json(prepareMessage(msg));
        }
    });
}
function authenticateByDB (request, respond) {
    var input_username = request.body.userid;
    var input_password = request.body.password;
    var msg = "";

    userDB.authenticateByDB(request.body.userid,request.body.password,function (error, result){

        if(error){
            respond.json(error);
        }else{
            if (result.length > 0){
                msg ="1";

            }else{
                msg ="Fail!";
            }

            respond.json(prepareMessage(msg));
        }
    });
}

function getAlluserinfo(request, respond){
    userDB.getAlluserinfo(function(error, result){
        if(error){
            respond.json(error);
        }else{
            respond.json(result);
        }
    });
}
function prepareMessage(msg){
    var obj = {"message": msg};

    return obj;
}
module.exports = {authenticate, authenticateByDB, getAlluserinfo};
