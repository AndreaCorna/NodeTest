var MsTranslator = require('mstranslator');

exports.translate = function translate(params,callback){
	var client = new MsTranslator({
      client_id: "a4810bf3-1b1b-4756-992a-1b25e647c3d7"
      , client_secret: "jy2BDwpqark0DzitoCa9tlr3X8d3/Jma4Imxs497OAo"
	}, true);
	client.translate(params, function(err, data) {
         callback(data);
    });
};