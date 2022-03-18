"user  strict";

class Restaurants {
    constructor(res_id, res_name, res_pic, about, location, open_hours, res_rating, reserve) {
        this.res_id = res_id;
        this.res_name = res_name;
        this.res_pic = res_pic;
        this.about = about;
        this.location = location;
        this.open_hours = open_hours;
        this.res_rating = res_rating;
        this.reserve = reserve;
        
        
        
    }
    getRes_id() {
        return this.res_id;
    }
    getRes_name() {
        return this.res_name;
    }
    getRes_pic() {
        return this.res_pic;
    }
    getAbout() {
        return this.about;
    }
    getLocation() {
        return this.location;
    }
    getOpen_hours() {
        return this.open_hours;
    }
    getRes_rating() {
        return this.res_rating;
    }
    getReserve() {
        return this.reserve;
    }
   
    
}
module.exports = Restaurants;