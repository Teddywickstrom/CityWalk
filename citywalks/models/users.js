var mongoose = require('mongoose');

//Users schema
var userSchema = mongoose.Schema({
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

var Users = module.exports = mongoose.model('User', userSchema);

//Get Users
module.exports.getUsers = function(callback, limit){
    User.find(callback).limit(limit);
}

//Add User
module.exports.addUser = function(user, callback){
    User.create(user, callback);
}
