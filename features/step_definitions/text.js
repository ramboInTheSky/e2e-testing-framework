const element = require('../support/element');
const expect = require('chai').expect;

/**
  * Text step definitions for use in feature files
  * @access public
  * @example Then the element with ID "my-id" has the text "My text"
  * @example Then the element with class "my-class" has the text "My text"
  * @example Then the element with tag "a" has the text "My text"
  * @example Then the element with name "my-name" has the text "My text"
  * @example Then the element with link text "My link" has the text "My link"
  * @example Then the element with partial link text "My li" has the text "My link"
  * @example Then the element with CSS selector ".my-element" has the text "My text"
  * @example Then the element with XPath "/html/body/article/p" has the text "My text"
  */
const textStepDefs = function () {
  this.Then(/^the element with ID "([^"]*)" has the text "([^"]*)"$/, function (id, text) {
    return element.findById.call(this, id).getText()
      .then((elemText) => {
        expect(elemText).to.equal(text);
      });
  });

  this.Then(/^the element with class "([^"]*)" has the text "([^"]*)"$/, function (className, text) {
    return element.findByClassName.call(this, className).getText()
      .then((elemText) => {
        expect(elemText).to.equal(text);
      });
  });

  this.Then(/^the element with tag "([^"]*)" has the text "([^"]*)"$/, function (tagName, text) {
    return element.findByTagName.call(this, tagName).getText()
      .then((elemText) => {
        expect(elemText).to.equal(text);
      });
  });

  this.Then(/^the element with name "([^"]*)" has the text "([^"]*)"$/, function (name, text) {
    return element.findByName.call(this, name).getText()
      .then((elemText) => {
        expect(elemText).to.equal(text);
      });
  });

  this.Then(/^the element with link text "([^"]*)" has the text "([^"]*)"$/, function (linkText, text) {
    return element.findByLinkText.call(this, linkText).getText()
      .then((elemText) => {
        expect(elemText).to.equal(text);
      });
  });

  this.Then(/^the element with partial link text "([^"]*)" has the text "([^"]*)"$/, function (partialLinkText, text) {
    return element.findByPartialLinkText.call(this, partialLinkText).getText()
      .then((elemText) => {
        expect(elemText).to.equal(text);
      });
  });

  this.Then(/^the element with CSS selector "([^"]*)" has the text "([^"]*)"$/, function (css, text) {
    return element.findByCss.call(this, css).getText()
      .then((elemText) => {
        expect(elemText).to.equal(text);
      });
  });

  this.Then(/^the element with XPath "([^"]*)" has the text "([^"]*)"$/, function (xpath, text) {
    return element.findByXPath.call(this, xpath).getText()
      .then((elemText) => {
        expect(elemText).to.equal(text);
      });
  });
};

module.exports = textStepDefs;
