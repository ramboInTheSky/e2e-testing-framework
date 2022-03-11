'use strict';

const config = require('../../lib/stores/config').get();

/**
  * Config bootstrapper
  * @access private
  */
const configSupport = function () {
  this.setDefaultTimeout(config.defaultTimeout || (60 * 1000));
};

module.exports = configSupport;
