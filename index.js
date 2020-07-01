var express = require('express');
const drive = require("drive-db");

var app = express();

app.get('/', (req, res)=> {
	res.send("Sample drive API data available at /api");
});

app.get('/api', function(req, res){
	
	// Load the data from the Drive Spreadsheet
	drive("1LDFxwBJ7bZP0KlII3cOi7lW9H5ljRN1c7qyg6Y9Deqc")
  	.then(db => res.json(db))
  	.catch(err => console.log(err));

});

app.listen(3000, ()=> {console.log("running at localhost:3000")});


