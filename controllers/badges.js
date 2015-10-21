'use strict';

var _ = require('underscore');
var model = require('../models/badges');

exports.save = function(request, response, next) {
  var badges = _.clone(request.body);
  model.save(badges, function(err) {
    if (err) return res.json(503, {error : true});
    next();
  });
};

exports.send = function(request, response, next) {
  next();
};
