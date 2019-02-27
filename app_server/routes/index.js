var express = require('express');
const router = express.Router();
var homeCtrl =  require('../controllers/main');

/* GET home page. */
router.get('/', homeCtrl.index);

module.exports = router;
