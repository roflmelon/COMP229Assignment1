var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Harry\'s Website' });
});

/* GET home page alternative. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Welcome to Harry\'s Website' });
});


/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('about_me', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('my_projects', { title: 'My Projects' });
});

/* GET service page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact_me', { title: 'Contact Me' });
});

module.exports = router;
