'use strict';

let config = {};

/**
  * Config store
  * @access private
  */
const configStore = {
  set: (_config) => {
    config = _config;
  },

  get: () => {
    return config;
  },
};

module.exports = configStore;
