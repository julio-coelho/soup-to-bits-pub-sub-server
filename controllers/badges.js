'use strict';

var _ = require('underscore');
var model = require('../models/badges');

exports.save = function(request, response, next) {
  var badges = _.clone(request.body);
  model.save(badges, function(err) {
    if (err) return res.json(503, {error : true});
    next();
    model.trim();
  });
};

exports.send = function(request, response, next) {
  var badges = _.clone(request.body);
  model.send(badges, function(err) {
    if (err) return res.json(503, {error : true});
    response.json(200, {error:null});
  });
};

exports.get = function(request, response) {
  model.get(function(err, data) {
    if (err) return res.json(503, {error : true});
    response.json(200, data);
  })
};
