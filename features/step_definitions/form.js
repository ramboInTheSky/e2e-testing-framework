const element = require('../support/element');
const form = require('../support/form');
const utility = require('../support/utility');
const expect = require('chai').expect;

/**
  * Form step definitions for use in feature files
  * @access public
  * @example When I input the text "my text" into the element with ID "my-id"
  * @example When I input the text "my text" into the element with class "my-class"
  * @example When I input the text "my text" into the element with tag "input"
  * @example When I input the text "my text" into the element with name "my-name"
  * @example When I input the text "my text" into the element with CSS selector ".my-form-field"
  * @example When I input the text "my text" into the element with XPath "/html/body/article/input"
  * @example When I select the value "my text" in the element with ID "my-id"
  * @example When I select the value "my text" in the element with class "my-class"
  * @example When I select the value "my text" in the element with tag "input"
  * @example When I select the value "my text" in the element with name "my-name"
  * @example When I select the value "my text" in the element with CSS selector ".my-form-field"
  * @example When I select the value "my text" in the element with XPath "/html/body/article/input"
  * @example Then the element with ID "my-id" has the value "my text"
  * @example Then the element with class "my-class" has the value "my text"
  * @example Then the element with tag "input" has the value "my text"
  * @example Then the element with name "my-name" has the value "my text"
  * @example Then the element with CSS selector ".my-form-field" has the value "my text"
  * @example Then the element with XPath "/html/body/article/input" has the value "my text"
  */
const formStepDefs = function () {
  // input

  this.When(/^I input the text "([^"]*)" into the element with ID "([^"]*)"$/, function (text, id) {
    return utility.waitForElementLocatedById.call(this, id, 3000)
      .then(() => {
        return element.findById.call(this, id);
      })
      .then((elem) => {
        return form.inputText.call(this, text, elem);
      });
  });

  this.When(/^I input the text "([^"]*)" into the element with class "([^"]*)"$/, function (text, className) {
    return utility.waitForElementLocatedByClassName.call(this, className, 3000)
      .then(() => {
        return element.findByClassName.call(this, className);
      })
      .then((elem) => {
        return form.inputText.call(this, text, elem);
      });
  });

  this.When(/^I input the text "([^"]*)" into the element with tag "([^"]*)"$/, function (text, tagName) {
    return utility.waitForElementLocatedByTagName.call(this, tagName, 3000)
      .then(() => {
        return element.findByTagName.call(this, tagName);
      })
      .then((elem) => {
        return form.inputText.call(this, text, elem);
      });
  });

  this.When(/^I input the text "([^"]*)" into the element with name "([^"]*)"$/, function (text, name) {
    return utility.waitForElementLocatedByName.call(this, name, 3000)
      .then(() => {
        return element.findByName.call(this, name);
      })
      .then((elem) => {
        return form.inputText.call(this, text, elem);
      });
  });

  this.When(/^I input the text "([^"]*)" into the element with CSS selector "([^"]*)"$/, function (text, css) {
    return utility.waitForElementLocatedByCss.call(this, css, 3000)
      .then(() => {
        return element.findByCss.call(this, css);
      })
      .then((elem) => {
        return form.inputText.call(this, text, elem);
      });
  });

  this.When(/^I input the text "([^"]*)" into the element with XPath "([^"]*)"$/, function (text, xpath) {
    return utility.waitForElementLocatedByXPath.call(this, xpath, 3000)
      .then(() => {
        return element.findByXPath.call(this, xpath);
      })
      .then((elem) => {
        return form.inputText.call(this, text, elem);
      });
  });

  // select

  this.When(/^I select the value "([^"]*)" in the element with ID "([^"]*)"$/, function (text, id) {
    return utility.waitForElementLocatedById.call(this, id, 3000)
      .then(() => {
        return element.findById.call(this, id);
      })
      .then((elem) => {
        return form.selectOptionByValueWithinElem.call(this, text, elem);
      });
  });

  this.When(/^I select the value "([^"]*)" in the element with class "([^"]*)"$/, function (text, className) {
    return utility.waitForElementLocatedByClassName.call(this, className, 3000)
      .then(() => {
        return element.findByClassName.call(this, className);
      })
      .then((elem) => {
        return form.selectOptionByValueWithinElem.call(this, text, elem);
      });
  });

  this.When(/^I select the value "([^"]*)" in the element with tag "([^"]*)"$/, function (text, tagName) {
    return utility.waitForElementLocatedByTagName.call(this, tagName, 3000)
      .then(() => {
        return element.findByTagName.call(this, tagName);
      })
      .then((elem) => {
        return form.selectOptionByValueWithinElem.call(this, text, elem);
      });
  });

  this.When(/^I select the value "([^"]*)" in the element with name "([^"]*)"$/, function (text, name) {
    return utility.waitForElementLocatedByName.call(this, name, 3000)
      .then(() => {
        return element.findByName.call(this, name);
      })
      .then((elem) => {
        return form.selectOptionByValueWithinElem.call(this, text, elem);
      });
  });

  this.When(/^I select the value "([^"]*)" in the element with CSS selector "([^"]*)"$/, function (text, css) {
    return utility.waitForElementLocatedByCss.call(this, css, 3000)
      .then(() => {
        return element.findByCss.call(this, css);
      })
      .then((elem) => {
        return form.selectOptionByValueWithinElem.call(this, text, elem);
      });
  });

  this.When(/^I select the value "([^"]*)" in the element with XPath "([^"]*)"$/, function (text, xpath) {
    return utility.waitForElementLocatedByXPath.call(this, xpath, 3000)
      .then(() => {
        return element.findByXPath.call(this, xpath);
      })
      .then((elem) => {
        return form.selectOptionByValueWithinElem.call(this, text, elem);
      });
  });

  // value checks

  this.Then(/^the element with ID "([^"]*)" has the value "([^"]*)"$/, function (id, text) {
    return utility.waitForElementLocatedById.call(this, id, 3000)
      .then(() => {
        return element.findById.call(this, id);
      })
      .then((elem) => {
        return elem.getAttribute('value');
      })
      .then((value) => {
        return expect(value).to.equal(text);
      });
  });

  this.Then(/^the element with class "([^"]*)" has the value "([^"]*)"$/, function (className, text) {
    return utility.waitForElementLocatedByClassName.call(this, className, 3000)
      .then(() => {
        return element.findByClassName.call(this, className);
      })
      .then((elem) => {
        return elem.getAttribute('value');
      })
      .then((value) => {
        return expect(value).to.equal(text);
      });
  });

  this.Then(/^the element with tag "([^"]*)" has the value "([^"]*)"$/, function (tagName, text) {
    return utility.waitForElementLocatedByTagName.call(this, tagName, 3000)
      .then(() => {
        return element.findByTagName.call(this, tagName);
      })
      .then((elem) => {
        return elem.getAttribute('value');
      })
      .then((value) => {
        return expect(value).to.equal(text);
      });
  });

  this.Then(/^the element with name "([^"]*)" has the value "([^"]*)"$/, function (name, text) {
    return utility.waitForElementLocatedByName.call(this, name, 3000)
      .then(() => {
        return element.findByName.call(this, name);
      })
      .then((elem) => {
        return elem.getAttribute('value');
      })
      .then((value) => {
        return expect(value).to.equal(text);
      });
  });

  this.Then(/^the element with CSS selector "([^"]*)" has the value "([^"]*)"$/, function (css, text) {
    return utility.waitForElementLocatedByCss.call(this, css, 3000)
      .then(() => {
        return element.findByCss.call(this, css);
      })
      .then((elem) => {
        return elem.getAttribute('value');
      })
      .then((value) => {
        return expect(value).to.equal(text);
      });
  });

  this.Then(/^the element with XPath "([^"]*)" has the value "([^"]*)"$/, function (xpath, text) {
    return utility.waitForElementLocatedByXPath.call(this, xpath, 3000)
      .then(() => {
        return element.findByXPath.call(this, xpath);
      })
      .then((elem) => {
        return elem.getAttribute('value');
      })
      .then((value) => {
        return expect(value).to.equal(text);
      });
  });
};

module.exports = formStepDefs;
