var mongoose = require('mongoose');

//Park schema
var parkSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    location:{
      type: Number
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Park = module.exports = mongoose.model('Park', parkSchema);

//Get Parks
module.exports.getParks = function(callback, limit){
    Park.find(callback).limit(limit);
}

//Get Park
module.exports.getParkById = function(id, callback){
    Park.findById(id, callback);
}