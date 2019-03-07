var mongoose = require ('mongoose');

//defining schemas
var reviewSchema = new mongoose.Schema({
    name : {type : String, required : true},
    rating : {type : Number, default : 0, min : 0, max : 5},
    reviewText : String,
    createdOn : {type : Date, default: Date.now}
});

var openingTimeSchema = new mongoose.Schema({
    days : {type : String, required : true},
    time : String,
    closed: {type : Boolean, required : true}
});

var locationSchema = new mongoose.Schema({
    name : {type : String, required : true},
    address : String,
    rating : {type : Number, default : 0, min : 0, max : 5},
    facilities : [String],
    coords : {type : [Number], index : '2dsphere'},
    openingTime : [openingTimeSchema],
    reviews : [reviewSchema]
});

//compiling model from schemas
mongoose.model('Location', locationSchema);