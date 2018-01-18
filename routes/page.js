var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Page = require('../models/Page.js');

/* GET ALL PAGES */
router.get('/', function(req, res, next) {
  Page.find(function (err, pages) {
    if (err) return next(err);
    res.json(pages);
  });
});

/* GET SINGLE PAGE BY ID */
// router.get('/:id', function(req, res, next) {
//   Page.findById(req.params.id, function (err, post) {
//     if (err) return next(err);
//     // console.log(req.params.id);
//     res.json(post);
//   });
// });

/* GET SINGLE PAGE BY Slug */
router.get('/:slug', function(req, res, next) {
  Page.findOne({slug:req.params.slug}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
