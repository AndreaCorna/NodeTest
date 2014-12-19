var mongoose = require('mongoose');

exports.testList = function testList(callback){
 var Test = mongoose.model( 'test' );
 Test.find({}, function (err, tests) {
  if(err){
   console.log(err);
  }else{
   console.log(tests);
   callback("",tests);
  }
 })
}

exports.insertList = function insertList(name_,email_,callback){
	var Test = mongoose.model( 'test' );
	var newLine = {
		name:name_ ,
		email: email_,
		descrs:[{"lat":"ciao","lng":"ciao"},{"lat":"ee","lng":"ee"}]
	}
	mongoose.connection.collection('test').insert(newLine,function(err,inserted){
		if(err){
			console.log(err);
		}else{
			console.log(inserted);
			callback(inserted);
		}
	});
}