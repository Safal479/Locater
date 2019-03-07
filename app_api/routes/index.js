var express = require('express');
var router = express.Router();

var locationsCtrl = require('../controllers/locations');
var reviewsCtrl = require('../controllers/reviews');

//define routes for locations
router.get('/locations/:locationid', locationsCtrl.locationsReadOne);
router.get('/locations', locationsCtrl.locationsListByDistance);
router.post('/locations', locationsCtrl.locationsCreate);
router.put('/locations/:locationid', locationsCtrl.locationsUpdateOne);
router.delete('/locations/:locationid', locationsCtrl.locationsDeleteOne);

//routes for review
router.get('/locations/:locationid/reviews/:reviewid', reviewsCtrl.reviewsReadOne);
router.post('/locations/:locationid/reviews', reviewsCtrl.reviewsCreate);
router.put('/locations/:locationid/reviews/:reviewid', reviewsCtrl.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', reviewsCtrl.reviewsDeleteOne);

module.exports = router;




