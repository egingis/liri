require("dotenv").config();

//Create all the variables that pull in the node commands

var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


