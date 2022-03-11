'use strict';

const parseArgs = require('minimist');
const defaultConfig = require('../config/default');

/**
  * Config helper
  * @access private
  */
const configHelper = {
  extendFromDefaultObject: (config) => {
    const args = parseArgs(process.argv.splice(2));

    return Object.assign(defaultConfig, args, config);
  },

  getCliArgumentsFromObject: (config) => {
    const cliArgs = [
      'node',
      './node_modules/cucumber/bin/cucumber.js',

      // feature files to run

      config.featuresDir,

      // supporting files from framework

      '--require',
      `${config.frameworkBaseDir}/features`,

      // files from implementing project

      '--require',
      config.featuresDir,
    ];

    if (config.createReport && config.reportsDir) {
      cliArgs.push('--format');
      cliArgs.push(`json:${config.reportsDir}/report-${config.fileSuffix}.json`);
    }

    if (config.debug) {
      cliArgs.push('--debug');
    }

    return cliArgs;
  },
};

module.exports = configHelper;
