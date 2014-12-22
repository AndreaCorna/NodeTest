var express = require('express');
var router = express.Router();
var dishesModel = require('../models/dishes')
var ingredientsModel = require('../models/ingredients')
var async = require('async')

router.get('/', function(req, res){
	async.parallel([
        function(callback){
            ingredientsModel.getIngredients(function(ingredients){
                callback(null, ingredients);
            });
        },
        function(callback){
            dishesModel.getDishes(function(dishes){
                callback(null, dishes);
            });
        }
    ],
    // optional callback
    function(err, results){
      if(err){
        console.log(err);
      }else{
        res.render('dish', {
          title: 'List of dishes',
          ingredients:results[0],
          dishes:results[1]});
        }
    });
});

router.post('/', function(req, res){
  console.log(req.body.components);
});

module.exports = router;

