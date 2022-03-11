'use strict';

const async = require('async');

const configHelper = require('./lib/config');
const configStore = require('./lib/stores/config');
const runner = require('./lib/runner');
const logger = require('./lib/logger');

const infoLog = (config, multiple) => {
  logger.title(`Amido E2E Test Framework - ${config.name}`);
  logger.lineBreak();
  logger.info(multiple ? 'Running multiple instances in serial' : 'Running single instance');
  logger.lineBreak();
  logger.info(`Feature files directory: ${config.featuresDir}`);
  logger.info(`Environment: ${config.environment}`);
  logger.lineBreak();
};

/**
  * Public framework API methods
  * @example const framework = require('amido-frontend-e2e-framework');
  * @example framework.api.run({
      name: 'Amido frontend E2E example',
      featuresDir: `${__dirname}/features`,

      defaultTimeout: 60000,

      createReport: true,
      reportsDir: `${__dirname}/reports`,

      takeScreenshotOnFailure: true,
      screenshotsDir: `${__dirname}/reports/screenshots`,

      localDriver: 'chrome',
      browserstack: {
        server: 'hub-cloud.browserstack.com',
        username: 'edkelly3',
        accessKey: 'G2FpCqykFqGvBrDwj3Cr',

        capabilities: {
          browserName: 'Chrome',
          resolution: '1024x768',
        },
      },

      debug: true,
    });
  * @example framework.api.runMultiple({
      name: 'Amido frontend E2E example',
      featuresDir: `${__dirname}/features`,

      defaultTimeout: 60000,

      createReport: true,
      reportsDir: `${__dirname}/reports`,

      takeScreenshotOnFailure: true,
      screenshotsDir: `${__dirname}/reports/screenshots`,

      localDriver: 'chrome',
      browserstack: {
        server: 'hub-cloud.browserstack.com',
        username: 'edkelly3',
        accessKey: 'G2FpCqykFqGvBrDwj3Cr',
      },

      debug: true,
    }, [
      {
        browserName: 'Chrome',
        resolution: '1024x768',
      },
      {
        browserName: 'Firefox',
        resolution: '1024x768',
      },
    ]);
  * @access public
  */
const api = {
  run: (_config) => {
    // get config

    const config = configHelper.extendFromDefaultObject(_config);
    config.frameworkBaseDir = __dirname;

    infoLog(config, false);

    // assign to store

    configStore.set(config);

    // let's go!

    runner(configHelper.getCliArgumentsFromObject(config), (err) => {
      if (err) {
        process.exit(1);
      }

      process.exit(0);
    });
  },

  runMultiple: (_config, capabilities) => {
    // get config

    let config = configHelper.extendFromDefaultObject(_config);
    config.frameworkBaseDir = __dirname;

    infoLog(config, true);

    // this method shouldn't be used with local run

    if (config.environment !== 'remote') {
      throw new Error('runMultiple() is only designed to work remotely');
    }

    const seriesFuncs = [];

    // for all the passed cabailities

    capabilities.forEach((capability) => {
      seriesFuncs.push((callback) => {
        // reload config (especially the fileSuffix param for reporting/screenshotting)

        config = configHelper.extendFromDefaultObject(_config);

        config.frameworkBaseDir = __dirname;
        config.browserstack.capabilities = capability;

        // save in store

        configStore.set(config);

        // let's go!

        runner(configHelper.getCliArgumentsFromObject(config), (err) => {
          if (err) {
            return callback(null, true); // error has occurred
          }

          return callback(null, false); // error has not occurred
        });
      });
    });

    // run all in sequence

    async.series(seriesFuncs, function (err, values) {
      if (err || values.indexOf(true) !== -1) { // one of the suites errored
        process.exit(1);
      }

      process.exit(0);
    });
  },
};

module.exports = api;
