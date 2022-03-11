const moment = require('moment');

/**
  * Default config
  * @access private
  * @desc Default config which is overridden by implementing party's config.
*/
const defaultConfig = {
  name: 'Amido E2E Framework',
  featuresDir: '../../features',

  environment: 'local',
  defaultTimeout: 10000,

  createReport: true,
  reportsDir: '../../reports',

  takeScreenshotOnFailure: true,
  screenshotsDir: '../../reports/screenshots',

  fileSuffix: moment().format('DDMMYY-HHmmss'),

  localDriver: 'chrome',
  browserstack: {
    server: 'hub-cloud.browserstack.com',
    username: null,
    accessKey: null,

    capabilities: {
      browserName: 'Chrome',
      resolution: '1024x768',
    },
  },

  debug: false,
};

module.exports = defaultConfig;
