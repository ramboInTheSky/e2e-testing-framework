'use strict';

const utility = require('../support/utility');

/**
  * Utility step definitions for use in feature files
  * @access public
  * @example When I sleep for "3000" milliseconds
  */
const utilityStepDefs = function () {
  this.When(/^I sleep for "([^"]*)" milliseconds$/, function (ms) {
    return utility.sleep.call(this, ms);
  });
};

module.exports = utilityStepDefs;
