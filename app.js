const r = require('rethinkdb');
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));





//routes
app.get('/get/puv/',function(req, res) {
	
	r.connect({host: 'localhost', port: 28015}, function(err, conn) {
		 
		 if(err) throw err;

		r.db('sapantaha').table('vehicles').run(conn,function(err, cursor){
			
			if(err) throw err;
			
			cursor.toArray(function(err, result) {
				if(err) throw err;
				res.send(result);
			});
		});
	});

});



app.post('/post/puv/',function(req, res){
	
	r.connect({host:'localhost', port: 28015},function(err, conn) {
		r.db('sapantaha').table('vehicles').insert([
			{
				"name": req.body.name
			}
			]).run(conn,function(err,result){
				if(err) throw err;
				res.send('successfully added');
			});	
	});

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));