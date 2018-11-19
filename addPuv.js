r = require('rethinkdb');

r.connect({host: 'localhost', port: 28015},function(err,conn){

	if(err) throw err;

r.db('sapantaha').table('vehicles').insert([
		{
			"name":'victory liner'
		}
	]).run(conn,function(err,result){
		if(err) throw err;
		console.log(JSON.stringify(result,null,2));
	});	

});


