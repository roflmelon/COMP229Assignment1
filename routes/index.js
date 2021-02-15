var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page alternative. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET Skills page. */
router.get('/skill', function(req, res, next) {
  res.render('index', { title: 'Skill' });
});

/* GET service page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services I Provide' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
