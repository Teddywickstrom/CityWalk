var mongoose = require('mongoose');

//City schema
var citySchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const Model = mongoose.model('City', citySchema);
module.exports = Model;
/*
//Get Cities
module.exports.getCities = function(callback, limit){
    City.find(callback).limit(limit);
}

//Add City
module.exports.addCity = function(city, callback){
    City.create(city, callback);
}
*/