'use strict';

const config = require('../../lib/stores/config').get();
const fs = require('fs');

const environmentIncludePath = `../../lib/environments/${config.environment}.js`;

if (!fs.existsSync(`${__dirname}/${environmentIncludePath}`)) {
  throw new Error(`Path ${environmentIncludePath} does not exist - have you checked your "environment" argument?`);
}

const world = require(environmentIncludePath);

/**
  * World bootstrapper
  * @access private
  */
module.exports = world;
