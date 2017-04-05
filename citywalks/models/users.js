var mongoose = require('mongoose');

//Users schema
var userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Users = module.exports = mongoose.model('User', citySchema);

//Get Cities
module.exports.getCities = function(callback, limit){
    City.find(callback).limit(limit);
}

//Add City
module.exports.addCity = function(city, callback){
    City.create(city, callback);
}
