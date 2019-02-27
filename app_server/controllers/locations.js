module.exports.homeList = function(req, res){
    res.render('index', {title: 'Home List'});
};

module.exports.locationInfo = function(req, res){
    res.render('index', {title: 'Location Info'});
};

module.exports.addReview = function(req, res){
    res.render('index', {title: 'Add Review'});
};