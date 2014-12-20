var express = require('express');
var router = express.Router();
var ingredientsModel = require('../models/ingredients')
var mascotsModel = require('../models/mascots')
var async = require('async')


router.get('/', function(req, res){

    async.parallel([
        function(callback){
            ingredientsModel.getIngredients(function(ingredients){
                callback(null, ingredients);
            });
        },
        function(callback){
            mascotsModel.getMascotsCategories(function(categories){
                callback(null, categories);
            });
        }
    ],
    // optional callback
    function(err, results){
      if(err){
        console.log(err);
      }else{
        res.render('ingredient', {
          title: 'List of ingredients',
          ingredients:results[0],
          categories:results[1]});
        }
    });

});


router.post('/',function(req, res){
	var name = req.body.name;
  var category = req.body.category;
  var image = req.body.image;

  console.log(category);
  async.parallel([
      function(callback){
          ingredientsModel.insertIngredient(name, category, image, function(ingredients){
            callback(null,ingredients);
          });
      },
      function(callback){
          mascotsModel.getMascotsCategories(function(categories){
            callback(null,categories);
          });
      }
    ],function(err,results){
        if(err){
          console.log(err);
        }else{
          res.render('ingredient', {
            title: 'List of ingredients',
            ingredients:results[0],
            categories:results[1]});
        }

  });
});
module.exports = router;
