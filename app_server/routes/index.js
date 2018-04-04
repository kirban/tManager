var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlOtherPages = require('../controllers/other');
var ctrlTasks = require('../controllers/tasks');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/signup', ctrlOtherPages.signup);
router.get('/forgot', ctrlOtherPages.forgot);
router.get('/about', ctrlOtherPages.about);

module.exports = router;
