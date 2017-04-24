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
