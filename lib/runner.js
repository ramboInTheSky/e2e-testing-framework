'use strict';

const configStore = require('./stores/config');
const directory = require('./directory');
const co = require('co');
const cucumberHelper = require('./cucumber');
const logger = require('./logger');

/**
  * Runner helper
  * @access private
  */
const runnerHelper = (args, callback) => {
  const config = configStore.get();

  directory.create(config);

  return co(function* () {
    try {
      if (config.environment === 'remote') {
        logger.info(`Executing with the following capability on ${config.browserstack.server}:`);
        logger.info(JSON.stringify(config.browserstack.capabilities));
        logger.lineBreak();
      } else if (config.environment === 'local') {
        logger.info('Executing locally');
      }

      yield cucumberHelper.run(args, config);

      logger.lineBreak();

      if (callback) {
        callback(false);
      }
    } catch (e) {
      logger.danger('An error occurred when executing Cucumber:');

      if (e && e.stack) {
        logger.danger(e.stack);
      }

      if (callback) {
        callback(true);
      }
    }
  });
};

module.exports = runnerHelper;
