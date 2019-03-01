module.exports.homeList = function(req, res){
    res.render('locations-list', {
        title: 'Loc8r - find nearby locations',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to chill near you'
        },
        sidenote: 'Looking for food or Wifi? Let Loc8r help you find the best places around.',
        locations: [{
            name: 'Starcups',
            address: 'Amarsingh Chowk-12, Pokhara, Kaski',
            distance: '100m',
            rating: 3,
            facilities: ['Hot drinks', 'Foods', 'Free Wifi']
        },
        {
            name: 'KFC',
            address: 'Prithvi Chowk-11, Pokhara, Kaski',
            distance: '150m',
            rating: 4,
            facilities: ['Cold drinks', 'Fried Chicken', 'Premium Wifi']
        },
        {
            name: 'Royal Momo',
            address: 'Amarsingh Chowk-12, Pokhara, Kaski',
            distance: '90m',
            rating: 4,
            facilities: ['Momo', 'Chowmin', 'Free Wifi']
        }
        ]
    });
};

module.exports.locationInfo = function(req, res){
    res.render('location-info', {
        title: 'Starcups',
        rating: 3,
        address: 'Amarsingh Chowk-12, Pokhara',
        opensOn: [{
            days: 'Monday - Friday',
            time: '7:00am - 7:00pm',
            closed: false
        },{
            days: 'Saturday',
            time: '8:00am - 5:00pm',
            closed: false
        },{
            days:'Sunday',
            closed: true
        }],
        facilities: ['Hot drinks', 'Foods', 'Free Wifi'],
        reviews: [{
            reviewAuthor: 'Safal Bastola',
            reviewDate: '16 July 2018',
            reviewText: 'What a great place!!!!!!',
            reviewRating: 4
        },
        {
            reviewAuthor: 'Safal Bastola 2',
            reviewDate: '14 July 2018',
            reviewText: 'What a horrible place !-_-!',
            reviewRating: 2
        }],
        note: 'Starcups is on Loc8r because it has accessible wifi.',
        sideNote: 'If you\'ve been and you like it - or if you don\'t - please leave a review.'
    });
};
module.exports.addReview = function(req, res){
    res.render('location-review-form', {title: 'Add Review'});
};