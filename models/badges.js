'use strict';

var redis = require('../lib/redis');

exports.save = function (badges, callback) {
  if (!badges.length) return callback(null, null);

  var badge = badges.pop();
  redis.lpush('badges', JSON.stringify(badge), function(err) {
    if (err) {
      return callback(err, null);
    } else {
      exports.save(badges, callback);
    }
  });
};