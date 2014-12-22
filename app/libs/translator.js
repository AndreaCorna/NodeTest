var MsTranslator = require('mstranslator');


var client = new MsTranslator({
      client_id: "a4810bf3-1b1b-4756-992a-1b25e647c3d7"
      , client_secret: "DQV/ImCjcUSqaKOpTldkITmqx4dytl6iQRzSyNQfURY="
	}, true);

exports.translate = function translate(params,callback){
	
	client.translate(params, function(err, data) {
         callback(data);
    });
};