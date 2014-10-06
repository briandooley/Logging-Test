  util = require('util');

  var logger = exports;
  logger.debugLevel = 'error';
  logger.log = function(level, message) {
    var levels = ['error', 'warn', 'info'];
    if (levels.indexOf(level) >= levels.indexOf(logger.debugLevel) ) {
      util.log(level + ': ' + message);
    }
  };