var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//HEJ
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

app.get('/api/cities', function(req, res){
    City.getCities(function(err, cities){
        if(err){
            throw err;
        }
        res.json(cities);
    });
    
});

app.post('/api/cities', function(req, res){
    var city = req.body;
    City.addCity(city, function(err, city){
        if(err){
            throw err;
        }
        res.json(city);
    });
    
});

app.get('/api/users', function(req, res){
    User.getUsers(function(err, users){
        if(err){
            throw err;
        }
        res.json(users);
    });
    
});

app.get('/api/users/:_id', function(req, res){
    User.getUserById(req.params._id, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    });
    
});

app.post('/api/users', function(req, res){
    var user = req.body;
    User.addUser(city, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    });
    
});

app.get('/api/parks', function(req, res){
    Park.getParks(function(err, parks){
        if(err){
            throw err;
        }
        res.json(parks);
    });
    
});

app.get('/api/parks/:_id', function(req, res){
    Park.getParkById(req.params._id, function(err, park){
        if(err){
            throw err;
        }
        res.json(park);
    });
    
});

app.listen(3000);
console.log('Running on port 3000...');