var mongoose = require('mongoose');

//Routes schema
var RoutesSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    userId:{
        type: String
    },
    description:{
        type: String
    },
    distance:{
        type: Number
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Model = mongoose.model('Routes', RoutesSchema);

module.exports = Model;