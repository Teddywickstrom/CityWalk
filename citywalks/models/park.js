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

const Model = mongoose.model('Park', parkSchema);

module.exports = Model;
