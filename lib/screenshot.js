'use strict';

const Promise = require('bluebird');

/**
  * Screenshot helper
  * @access private
  */
const screenshotHelper = {
  take: (config, driver) => {
    return new Promise((resolve) => {
      if (config.takeScreenshotOnFailure && config.screenshotsDir) {
        return driver.takeScreenshot()
          .then((data) => {
            return resolve(data);
          });
      }

      return resolve(null);
    });
  },
};

module.exports = screenshotHelper;
