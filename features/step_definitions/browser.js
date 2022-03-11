'use strict';

const browser = require('../support/browser');
const expect = require('chai').expect;

/**
  * Browser step definitions for use in feature files
  * @access public
  * @example Given I navigate to "http://www.google.com"
  * @example When I navigate to "http://www.google.com"
  * @example When I get the browser title
  * @example Then the browser title should be "foo"
  * @example When I switch to the window named "window1"
  * @example When I switch to the frame named "frame1"
  * @example When I go back in the browser
  * @example When I go forward in the browser
  */
const browserStepDefs = function () {
  this.Given(/^I navigate to "([^"]*)"$/, function (url) {
    return browser.getUrl.call(this, url);
  });

  // this.When(/^When I navigate to "([^"]*)"$/, function (url) {
  //   return browser.getUrl.call(this, url);
  // });

  this.When(/^I get the browser title"$/, function () {
    return browser.getTitle.call(this);
  });

  this.Then(/^the browser title should be "([^"]*)"$/, function (title) {
    return browser.getTitle.call(this)
      .then((browserTitle) => {
        expect(title).to.equal(browserTitle);
      });
  });

  this.When(/^I switch to the window named "([^"]*)"$/, function (windowName) {
    return browser.switchToWindow.call(this, windowName);
  });

  this.When(/^I switch to the frame named "([^"]*)"$/, function (frameName) {
    return browser.switchToFrame.call(this, frameName);
  });

  this.When(/^I go back in the browser$/, function () {
    return browser.goBack.call(this);
  });

  this.When(/^I go forward in the browser$/, function () {
    return browser.goForward.call(this);
  });

  this.When(/^I set the browser size to "([^"]*)" height and "([^"]*)" width$/, function (height, width) {
    return browser.setWindowSize.call(this, height, width);
  });
};

module.exports = browserStepDefs;
