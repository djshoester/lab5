var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var data_2 = {  	
		"name" : req.query.name,
		"description": req.query.description,
		"imageURL" : "http://lorempixel.com/400/400/people"	 
	}
	data.friends.push(data_2);

res.render('index', {'friends_list' : data});
 }
