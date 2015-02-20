/**
 * Created by Todor Todorin on 2/20/2015.
 */
var express  = require('express');
var app      = express(); 								// create our public w/ express
var port  	 = process.env.PORT || 8080; 				// set the port

var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration ===============================================================

app.use(express.static(__dirname)); 				// set the static files location /public/img will be /img for users									// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes ======================================================================
require('./server/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);