var mongoose = require('mongoose');
var db = require('./db')

exports.insertMascot = function insertMascot(category_italian,category_english, name_, latitude_, longitude_, modelUrl_, callback){
	var mascot = mongoose.model(db.modelMascot);
	var newMascot = {
		category:[{country:'it',name:category_italian},{country:'en',name:category_english}],
		latitude:1,
		longitude:2,
		modelUrl:modelUrl_,
		name:name_
	}
	db.mascots.insert(newMascot,function(err,inserted){
		if(err){
			console.log(err);
		}else{
			console.log(inserted);
			mascot.find({},function(err,list){
				if(err){
					console.log(err);
				}else{
					callback(list);
				}
			});
		}
	});
	
}

exports.getMascots = function getMascots(callback){
	var mascot = mongoose.model(db.modelMascot);
	mascot.find({},function (err,list){
		if(err){
			console.log(err);
		}else{
			callback(list);
		}
	});
}

exports.getMascotsCategories = function getMascots(callback){
	var mascot = mongoose.model(db.modelMascot);
	console.log(mongoose.version);
	mascot.aggregate({ $match: { "category.country":"it"} },{ $group: { _id: '$category.name'}},{ $project: { _id: 1}},function(err, list) {
        if(err){
			console.log(err);
		}else{
			console.log(list)
			var listCategories = []
			for (var i = list.length - 1; i >= 0; i--) {
				listCategories.push(list[i]['_id'][0])
			};
			callback(listCategories);
		}
    });
	/*mascot.find({},{category:1,_id:0}).exec(function (err,list){
		if(err){
			console.log(err);
		}else{
			console.log(list)
			callback(list);
		}
	});*/
}