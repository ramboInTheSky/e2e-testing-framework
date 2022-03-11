'use strict';

const webdriver = require('selenium-webdriver');
const fs = require('fs');
const config = require('../../lib/stores/config').get();
const screenshot = require('../../lib/screenshot');
const logger = require('../../lib/logger');

let driver;

if (config.localDriver === 'chrome') {
  const chrome = require('selenium-webdriver/chrome');
  const chromeDriverPath = require('chromedriver').path;

  const service = new chrome.ServiceBuilder(chromeDriverPath).build();
  chrome.setDefaultService(service);
}

/**
  * Local environment definition
  * @access private
  */
const localEnvironment = function () {
  // set up driver

  this.Before(function (Scenario, done) {
    switch (config.localDriver) {
      case 'chrome':
      default: {
        driver = new webdriver.Builder()
          .forBrowser('chrome')
          .build();

        this.driver = driver;

        break;
      }

      case 'firefox': {
        // this is stubbed for now - needs fixing at a later date

        // const firefox = require('selenium-webdriver/firefox');
        // const geckoDriverPath = require('geckodriver').path;
        //
        // const binary = new firefox.Binary(geckoDriverPath);
        // const options = new firefox.Options()
        //   .setBinary(binary);
        //
        // driver = new firefox.Driver(options);
        //
        // this.driver = driver;
        break;
      }
    }

    done();
  });

  // take screenshot if step fails

  this.StepResult(function (StepResult, done) {
    if (StepResult.getStatus() === 'failed') {
      // take screenshot

      screenshot.take(config, driver)
        .then((data) => {
          if (data) {
            const fileName = `screenshot-${config.fileSuffix}-${new Date().getTime()}.png`;

            fs.writeFile(`${config.screenshotsDir}/${fileName}`, data, 'base64', () => {
              logger.info(`Screenshot ${fileName} taken`);
              logger.lineBreak();
            });
          }
        });
    }

    done();
  });

  // close browser instance after all features are run

  this.After(function (Scenario, done) {
    this.driver.close();

    setTimeout(function () {
      done();
    }, 500);
  });
};

module.exports = localEnvironment;
