var mongoose = require('mongoose');
var db = require('./db')
var translator = require('../libs/translator');


exports.insertIngredient = function insertIngredient(name, category_id, urlImage, callback){
	var ingredient = mongoose.model(db.modelIngredient)
	db.mascots.findOne({"category.name":category_id},function(err,result){
		if(err){
			console.log(err);
		}else{
			var nameEnglish;
			var params = {
		      text: name
		      , from: 'it'
		      , to: 'en'
		    };
			translator.translate(params,function(translation){
				nameEnglish = translation;
				var newIngredient = {
					names:[{name:name,country:'it'},{name:nameEnglish,country:'en'}],
					category:result['_id'],
					imageUrl:urlImage
				}
				db.ingredients.insert(newIngredient,function(err,inserted){
					if(err){
						console.log(err);
					}else{
						console.log(inserted);
						ingredient.find({},function(err,list){
							if(err){
								console.log(err);
							}else{
								callback(list);
							}
						});
					}
				});

			});
			
		}
	});

	
}

exports.getIngredients = function getIngredients(callback){
	var ingredients = mongoose.model(db.modelIngredient);
	ingredients.find({},function (err,list){
		if(err){
			console.log(err);
		}else{
			callback(list);
		}
	});
}