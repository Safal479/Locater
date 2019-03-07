var express = require('express');
var router = express.Router();
var othersCtrl =  require('../controllers/others');
var locationsCtrl = require('../controllers/locations');

/* GET home page. */
router.get('/', locationsCtrl.homeList);
router.get('/location', locationsCtrl.locationInfo);
router.get('/location/review/new', locationsCtrl.addReview);

router.get('/about', othersCtrl.about);

module.exports = router;
