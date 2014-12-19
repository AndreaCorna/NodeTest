var mongoose = require('mongoose');
var db = require('./db')


exports.insertDish = function insertDish(name, nationality_, imageUrl_, descriptions_ , ingredients_ , zone_, callback){

}


exports.getDishes = function getDishes(callback){
	var dishes = mongoose.model(db.modelDish);
	dishes.find({},function(err,list){
		if(err){
			console.log(err);
		}else{
			callback(list);
		}
	});
}