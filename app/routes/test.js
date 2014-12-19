var express = require('express');
var router = express.Router();
var testVar = require('../models/tests')

router.get('/', function(req, res){
	testVar.testList(function(err,testList){
  res.render('test', {
  title: 'Test web page on node.js using Express',
	tests:testList});}
);
});

module.exports = router;