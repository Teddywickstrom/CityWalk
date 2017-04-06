//var express = require('express');
//var app = express();
//var bodyParser = require('body-parser');
//var mongoose = require('mongoose');
//var crud = require('./CRUD/crud.js') //Testade nya CRUD func

const feathers = require('feathers');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const service = require('feathers-mongoose');

// Tell mongoose to use native promises
// See http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;

const Model = require('./models/messages');
//app.use(bodyParser.json());

 Park = require('./models/park');
const City = require('./models/city');

//Connect to mongoose
mongoose.connect('mongodb://masj:Mint.js1337@ds050539.mlab.com:50539/citywalks');
var db = mongoose.connection;

// Create a feathers instance.
const app = feathers()
  // Enable REST services
  .configure(rest())
  // Turn on JSON parser for REST services
  .use(bodyParser.json())
  // Turn on URL-encoded parser for REST services
  .use(bodyParser.urlencoded({extended: true}))

// Connect to the db, create and register a Feathers service.

app.use('/api/messages', service({
  Model,
  lean: true, // set to false if you want Mongoose documents returned
  paginate: {
    default: 7,
    max: 10
  }
}));


/*
app.use('/api/cities', service({
  City,
  lean: true, // set to false if you want Mongoose documents returned
  paginate: {
    default: 2,
    max: 4
  }
}));


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

app.get('/api/parks/:_id', function(req, res){
    Park.getParkById(req.params._id, function(err, park){
        if(err){
            throw err;
        }
        res.json(park);
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
*/


app.listen(3000);
console.log('Running on port 3000...');