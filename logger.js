// All timestamps displayed are in UTC.
// If you wish to see the current time in UTC, go to http://www.worldtimeserver.com/current_time_in_UTC.aspx
util = require('util');

// This is based off an article at https://docs.nodejitsu.com/articles/intermediate/how-to-log
var logger = exports;
logger.debugLevel = 'error';
logger.log = function(level, message) {
  var levels = ['error', 'warn', 'info'];
  if (levels.indexOf(level) >= levels.indexOf(logger.debugLevel) ) {
    util.log(level + ': ' + message);
  }
};