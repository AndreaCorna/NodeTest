var mongoose = require( 'mongoose' );



var test = new mongoose.Schema({
 name: String,
 email: String,
 descrs: Array
},{ collection : 'test' });

mongoose.model( 'test', test );


var modelIngredient = 'ingredient'
var ingredientCollection = 'ingredients'

var ingredient = new mongoose.Schema({
	names: Array,
	imageUrl: String,
	category: mongoose.Schema.Types.ObjectId
},{collection: ingredientCollection});

mongoose.model( modelIngredient, ingredient);

var modelMascot = 'mascot'
var mascotCollection = 'mascots'

var mascot = new mongoose.Schema({
	category:Array,
	latitude:Number,
	longitude:Number,
	modelUrl:String,
	names:Array

},{collection:mascotCollection});

mongoose.model( modelMascot , mascot);

var modelDish = 'dish'
var dishCollection = 'dishes'

var dish = new mongoose.Schema({
	names:Array,
	nationality:String,
	image:String,
	descriptions:Array,
	ingredients:Array,
	zone:String
},{collection:dishCollection});

mongoose.model( modelDish , dish);

var modelStatistic = 'statistic'
var statisticCollection = 'statistics'

var statistic = new mongoose.Schema({

},{collection:statisticCollection});

mongoose.model( modelStatistic , statistic);

mongoose.connect( 'mongodb://localhost/expogame' );

exports.modelIngredient = modelIngredient
exports.ingredients = mongoose.connection.collection(ingredientCollection)

exports.modelMascot = modelMascot
exports.mascots = mongoose.connection.collection(mascotCollection)

exports.modelDish = modelDish
exports.dishes = mongoose.connection.collection(dishCollection)

exports.modelStatistic = modelStatistic
exports.statistics = mongoose.connection.collection(statisticCollection)