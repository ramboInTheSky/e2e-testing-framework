const seleniumWebdriver = require('selenium-webdriver');

/**
  * Utility supporting functions available for use in spec declarations
  * @access public
  * @example const utilitySupport = require('amido-frontend-e2e-framework').support.utility;
  * @example utilitySupport.wait.call(this, myConditionFunction, 3000); // wait 3s for myConditionFunction to pass - see http://www.seleniumhq.org/docs/03_webdriver.jsp
  * @example utilitySupport.waitForElementLocatedById.call(this, 'my-id', 3000); // wait 3s for element with ID to be located
  * @example utilitySupport.waitForElementLocatedByClassName.call(this, 'my-class', 3000); // wait 3s for element with class to be located
  * @example utilitySupport.waitForElementLocatedByTagName.call(this, 'a', 3000); // wait 3s for element with tag name to be located
  * @example utilitySupport.waitForElementLocatedByName.call(this, 'my-name', 3000); // wait 3s for element with name to be located
  * @example utilitySupport.waitForElementLocatedByLinkText.call(this, 'My link', 3000); // wait 3s for element with link text to be located
  * @example utilitySupport.waitForElementLocatedByPartialLinkText.call(this, 'My li', 3000); // wait 3s for element with partial link text to be located
  * @example utilitySupport.waitForElementLocatedByCss.call(this, '.my-class', 3000); // wait 3s for element with CSS selector to be located
  * @example utilitySupport.waitForElementLocatedByXPath.call(this, '/html/body/article/p', 3000); // wait 3s for element with XPath to be located
  * @example utilitySupport.sleep.call(this, 3000); // sleep the execution for 3s
  * @example utilitySupport.takeScreenshot.call(this).then((screenshotData) => { // take a screenshot (returns binary data which must be saved to disk)
  */
const utilitySupport = {
  wait(condition, ms) {
    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedById(id, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ id });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByClassName(className, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ className });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByTagName(tagName, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ tagName });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByName(name, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ name });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByLinkText(linkText, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ linkText });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByPartialLinkText(partialLinkText, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ partialLinkText });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByCss(css, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ css });

    return this.driver.wait(condition, ms);
  },

  waitForElementLocatedByXPath(xpath, ms) {
    const condition = seleniumWebdriver.until.elementLocated({ xpath });

    return this.driver.wait(condition, ms);
  },

  sleep(ms) {
    return this.driver.sleep(ms);
  },

  takeScreenshot() {
    return this.driver.takeScreenshot();
  },
};

module.exports = utilitySupport;
