var express = require('express');
var router = express.Router();
var mascotsModel = require('../models/mascots')


router.get('/', function(req, res){
  mascotsModel.getMascots(function(mascots){
    res.render('mascot', {
    title: 'List of mascots',
    mascots:mascots});
  });
  
});

router.post('/',function(req, res){
	console.log("call");
  	var category = req.body.category;
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    var modelUrl = req.body.modelUrl;
    var name = req.body.name;

  	mascotsModel.insertMascot(category,name, latitude, longitude, modelUrl, function(mascots){
  		res.render('mascot', {
    	title: 'List of mascots',
    	mascots:mascots});
  	});
});
module.exports = router;