'use strict';

const fs = require('fs');

/**
  * Directory helper
  * @access private
  */
const directoryHelper = {
  create: (config) => {
    if (config.reportsDir) {
      if (!fs.existsSync(config.reportsDir)) {
        fs.mkdirSync(config.reportsDir);
      }
    }

    if (config.screenshotsDir) {
      if (!fs.existsSync(config.screenshotsDir)) {
        fs.mkdirSync(config.screenshotsDir);
      }
    }
  },
};

module.exports = directoryHelper;
