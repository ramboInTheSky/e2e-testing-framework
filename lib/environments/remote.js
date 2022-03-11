'use strict';

const webdriver = require('selenium-webdriver');
const browserstack = require('browserstack-local');
const config = require('../stores/config').get();

const server = config.browserstack.server || process.env.BROWSERSTACK_SERVER;
const username = config.browserstack.username || process.env.BROWSERSTACK_USERNAME;
const accessKey = config.browserstack.accessKey || process.env.BROWSERSTACK_ACCESS_KEY;
const capabilities = config.browserstack.capabilities;

/**
  * Remote envrionment definition
  * @access private
  */
const remoteEnvironment = function () {
  let browserStackLocal;

  // set up driver

  this.Before(function (Scenario, done) {
    browserStackLocal = new browserstack.Local();

    browserStackLocal.start({
      key: accessKey,
    }, (err) => {
      if (err) {
        throw new Error(err);
      }

      this.driver = new webdriver.Builder()
        .usingServer(`http://${server}/wd/hub`)
        .withCapabilities(Object.assign(capabilities, {
          'browserstack.user': username,
          'browserstack.key': accessKey,
        }))
        .build();

      done();
    });
  });

  // tear down driver

  this.After(function (Scenario, done) {
    this.driver.quit()
      .then(() => {
        if (browserStackLocal) {
          return browserStackLocal.stop(done);
        }

        return done();
      });
  });
};

module.exports = remoteEnvironment;
