//Connect to programs
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//handle json script
app.use(bodyParser.json());

Park = require('./models/park');
City = require('./models/city');
User = require('./models/user');

//Connect to mongoose
mongoose.connect('mongodb://masj:Mint.js1337@ds050539.mlab.com:50539/citywalks');
var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Please use /api/cities or /api/parks');
});

//Get function for city
app.get('/api/cities', function(req, res){
    City.getCities(function(err, cities){
        if(err){
            throw err;
        }
        res.json(cities);
    });
    
});

//Post function for city
app.post('/api/cities', function(req, res){
    var city = req.body;
    City.addCity(city, function(err, city){
        if(err){
            throw err;
        }
        res.json(city);
    });
    
});

//Get function for users
app.get('/api/users', function(req, res){
    User.getUsers(function(err, users){
        if(err){
            throw err;
        }
        res.json(users);
    });
    
});

//Get function for one user by using ID
app.get('/api/users/:_id', function(req, res){
    User.getUserById(req.params._id, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    });
    
});

//Post users
app.post('/api/users', function(req, res){
    var user = req.body;
    User.addUser(user, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    });
    
});

//Get function for park
app.get('/api/parks', function(req, res){
    Park.getParks(function(err, parks){
        if(err){
            throw err;
        }
        res.json(parks);
    });
    
});

//Get function for one park by using ID
app.get('/api/parks/:_id', function(req, res){
    Park.getParkById(req.params._id, function(err, park){
        if(err){
            throw err;
        }
        res.json(park);
    });
    
});

//port listening
app.listen(3000);
console.log('Running on port 3000...');