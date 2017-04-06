var mongoose = require('mongoose');

//Users schema
var UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    register_date:{
        type: Date,
        default: Date.now
    },
    email:{
        type: String
    }
    
});

const Model = mongoose.model('User', UserSchema);

module.exports = Model;