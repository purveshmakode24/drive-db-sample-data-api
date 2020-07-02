var express = require('express');
const drive = require("drive-db");
var cors = require('cors');

var app = express();


app.get('/', (req, res)=> {
	res.send("Sample drive API data available at /api");
});

// note: cors() here allows to [Access-Control-Allow-Origin: *] for this GET method route only
app.get('/api', cors(), function(req, res){
	
	// Load the data from the Drive Spreadsheet
	drive("1LDFxwBJ7bZP0KlII3cOi7lW9H5ljRN1c7qyg6Y9Deqc")
  	.then(db => res.json(db))
  	.catch(err => console.log(err));

});

app.listen(8000, ()=> {console.log("running at localhost:8000")});


