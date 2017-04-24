const feathers = require('feathers');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const service = require('feathers-mongoose');
const express = require('express');//Add express

// Tell mongoose to use native promises
// See http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;

const Message = require('./models/messages');
const Attraction = require('./models/attraction');
const City = require('./models/city');
const User = require('./models/users');
const Routes = require('./models/routes')

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

// Get the PORT
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

// Connect to the db, create and register a Feathers service.

app.use('/api/messages', service({
  Model: Message,
  lean: true, // set to false if you want Mongoose documents returned
}));

app.use('/api/cities', service({
  Model: City,
  lean: true, // set to false if you want Mongoose documents returned

}));

app.use('/api/routes', service({
  Model: Routes,
  lean: true, // set to false if you want Mongoose documents returned

}));

app.use('/api/users', service({
  Model: User,
  lean: true, // set to false if you want Mongoose documents returned

}));

app.use('/api/attractions', service({
  Model: Attraction,
  lean: true, // set to false if you want Mongoose documents returned

}));

//Listen on PORT defined above
app.listen(app.get('port'), function() {
 console.log("Node app is running at localhost:" + app.get('port'))
})
