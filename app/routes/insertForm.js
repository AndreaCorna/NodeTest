var express = require('express');
var router = express.Router();
var testVar = require('../models/tests')
var testIngredient = require('../models/ingredients')


router.get('/', function(req, res){
  // The form's action is '/' and its method is 'POST',
  // so the `app.post('/', ...` route will receive the
  // result of our form
  var html = '<form action="insert" method="post">' +
               'Enter your name:' +
               '<input type="text" name="name" placeholder="Insert name..." />' +
               '<br>' +
               'Enter your email:' +
               '<input type="text" name="email" placeholder="Insert email..." />' +
               '<br>'+
               '<button type="submit">Submit</button>' +
            '</form>';
               
  res.send(html);
});


router.post('/', function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  testIngredient.insertIngredient({"name":"ciao"},"fkkds","vfofoe",null);
  testVar.insertList(name,email,function(inserted){
    res.render('test', {
    title: 'What you have inserted',
    tests:inserted});
  });
  
});


module.exports = router;