var mongoose = require('mongoose');

//Park schema
var attractionSchema = mongoose.Schema({
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

const Model = mongoose.model('Attraction', attractionSchema);

module.exports = Model;
