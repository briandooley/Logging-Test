  var logger = require('./logger');
  logger.debugLevel = 'error';

  logger.log('info', 'Everything started properly.');
  logger.log('warn', 'Running out of memory...');
  logger.log('error', 'All is doomed');
  