//Connects to the database
var mongoose = require('mongoose');

//Defines the City schema
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

//Exports the City variabel and city schema
var City = module.exports = mongoose.model('City', citySchema);

//Get Cities
module.exports.getCities = function(callback, limit){
    City.find(callback).limit(limit);
}

//Add City
module.exports.addCity = function(city, callback){
    City.create(city, callback);
}
