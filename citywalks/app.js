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

const Message = require('./models/messages');
const Park = require('./models/park');
const City = require('./models/city');
const User = require('./models/users');

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
  Model: Message,
  lean: true, // set to false if you want Mongoose documents returned
  paginate: {
    default: 7,
    max: 10
  }
}));

app.use('/api/cities', service({
  Model: City,
  lean: true, // set to false if you want Mongoose documents returned
  paginate: {
    default: 7,
    max: 10
  }
}));

app.use('/api/users', service({
  Model: User,
  lean: true, // set to false if you want Mongoose documents returned
  paginate: {
    default: 7,
    max: 10
  }
}));

app.use('/api/parks', service({
  Model: Park,
  lean: true, // set to false if you want Mongoose documents returned
  paginate: {
    default: 7,
    max: 10
  }
}));

app.listen(3000);
console.log('Running on port 3000...');