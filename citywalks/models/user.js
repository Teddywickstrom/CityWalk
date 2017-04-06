var mongoose = require('mongoose');

//Users schema
var userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var User = module.exports = mongoose.model('User', userSchema);

//Get Users
module.exports.getUsers = function(callback, limit){
    User.find(callback).limit(limit);
}

//Add User
module.exports.addUser = function(user, callback){
    User.create(user, callback);
}

//Get User by ID
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}