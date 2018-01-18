var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* SAVE USER */
router.post('/', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* LOGIN USER */
router.post('/login-user', function(req, res, next) {
  User.findOne({useremail:req.body.useremail,password:req.body.password}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



module.exports = router;
