let mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/products',
 	{useNewUrlParser: true, useCreateIndex: true});
 
	let db = mongoose.connection;
 
 db.on('connected', function() {
 	console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
 });