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
  	var categoryItalian = req.body.categoryItalian;
    var categoryEnglish = req.body.categoryEnglish;
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    var modelUrl = req.body.modelUrl;
    var nameItalian = req.body.nameItalian;
    var nameEnglish = req.body.nameEnglish;

  	mascotsModel.insertMascot(categoryItalian,categoryEnglish,nameItalian,nameEnglish, latitude, longitude, modelUrl, function(mascots){
  		res.render('mascot', {
    	title: 'List of mascots',
    	mascots:mascots});
  	});
});
module.exports = router;