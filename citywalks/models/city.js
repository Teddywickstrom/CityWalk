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

var City = module.exports = mongoose.model('City', citySchema);

//Get Cities
module.exports.getCities = function(callback, limit){
    City.find(callback).limit(limit);
}

//Add City
module.exports.addCity = function(city, callback){
    City.create(city, callback);
}
