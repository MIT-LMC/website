var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'MIT LMC | Live Music Connection', activeView: 'home' });
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'MIT LMC | About LMC', activeView: 'about' });
});

/* GET Concerts page. */
router.get('/concerts', function(req, res, next) {
  res.render('concerts', { title: 'MIT LMC | Concert Series', activeView: 'concerts' });
});

/* GET Open Source page. */
router.get('/opensource', function(req, res, next) {
  res.render('opensource', { title: 'MIT LMC | Open Source', activeView: 'opensource' });
});

/* GET Rentals page. */
router.get('/rentals', function(req, res, next) {
  res.render('rentals', { title: 'MIT LMC | Equipment Rentals', activeView: 'rentals' });
});

/* GET Sponsorship page. */
router.get('/sponsors', function(req, res, next) {
  res.render('sponsors', { title: 'MIT LMC | Sponsorship', activeView: 'sponsors' });
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'MIT LMC | Contact Us', activeView: 'contact' });
});

module.exports = router;
