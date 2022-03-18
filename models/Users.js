"use strict";
class Users {
    constructor(_id, userid, user_pic, first_name, last_name, password, email_address, mobile_number, address, gender) {
        this._id = _id;
        this.userid = userid;
        this.user_pic = user_pic;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.email_address = email_address;
        this.mobile_number = mobile_number;
        this.address = address;
        this.gender = gender;
    }
    getId() {
        return this._id;
    }
    getUserid() {
        return this.userid;
    }
    getUser_pic() {
        return this.user_pic;
    }
    getFirst_name() {
        return this.first_name;
    }
    getLast_name() {
        return this.last_name;
    }
    getPassword() {
        return this.password;
    }
    getEmail_address() {
        return this.email_address;
    }
    getMobile_number() {
        return this.mobile_number;
    }
    getAddress() {
        return this.address;
    }
    getGender() {
        return this.gender;
    }

    setUserid(userid) {
        this.userid = userid;
    }
    setUser_pic(user_pic) {
        this.user_pic = user_pic;
    }
    setFirst_name(first_name) {
        this.first_name = first_name;
    }
    setLast_name(last_name) {
        this.last_name = last_name;
    }
    setPassword(password) {
        this.password = password;
    }
    setEmail_address(email_address) {
        this.email_address = email_address;
    }
    setMobile_number(mobile_number) {
        this.mobile_number = mobile_number;
    }
    setAddress(address) {
        this.address = address;
    }
    setGender(gender) {
        this.gender = gender;
    }

}
module.exports = Users;