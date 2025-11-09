var express = require('express');
var router = express.Router();

router.all('/*', function(req, res, next) {
    res.app.locals.layout = 'home';
    next();
})
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home/index', { title: 'Home Page' });
});
router.get('/booking', function(req, res, next) {
    res.render('home/booking', { title: 'product Page' });
});

router.get('/about', function(req, res, next) {
    res.render('home/about', { title: 'about Page' });
});
router.get('/contact', function(req, res, next) {
    res.render('home/contact', { title: 'Contact Page' });
});
router.get('/room', function(req, res, next) {
    res.render('home/room', { title: 'product-detail Page' });
});
router.get('/service', function(req, res, next) {
    res.render('home/service', { title: 'shopping-cart Page' }); // -> sẽ tự nhúng vào {{{body}}} trong layout.hbs
});
router.get('/team', function(req, res, next) {
    res.render('home/team', { title: 'blog Page' }); // -> sẽ tự nhúng vào {{{body}}} trong layout.hbs
});
router.get('/testimonial', function(req, res, next) {
    res.render('home/testimonial', { title: 'blog-detail Page' }); // -> sẽ tự nhúng vào {{{body}}} trong layout.hbs
});
module.exports = router;