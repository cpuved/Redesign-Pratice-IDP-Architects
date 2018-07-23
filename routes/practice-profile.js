var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('practice-profile', { domain: 'IDP Architects - ', title: 'Practice Profile', layout: 'layout.hbs' });
});

module.exports = router;
