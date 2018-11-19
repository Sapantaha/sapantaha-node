r = require('rethinkdb');

r.connect({host:'localhost', port: 28015},function(err, conn) {

	if(err) throw err;

	r.db('sapantaha').table('vehicles').changes().run(conn,function(err, cursor) {

		if(err) throw err;

		cursor.each(function(err, row) {
			if(err) throw err;
			console.log(JSON.stringify(row,null,2));
		});

	})

});