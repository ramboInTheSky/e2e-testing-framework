/**
  * Element supporting functions available for use in spec declarations
  * @access public
  * @example const elementSupport = require('amido-frontend-e2e-framework').support.element;
  * @example elementSupport.find.call(this, { id: 'my-id '}).then((elem) => {... // find element using keyed object
  * @example elementSupport.findById.call(this, 'my-id').then((elem) => {... // find element by ID
  * @example elementSupport.findByClassName.call(this, 'my-class').then((elem) => {... // find element by class
  * @example elementSupport.findByTagName.call(this, 'a').then((elem) => {... // find element by tag name
  * @example elementSupport.findByName.call(this, 'my-name').then((elem) => {... // find element by name
  * @example elementSupport.findByLinkText.call(this, 'Link text').then((elem) => {... // find element by link text
  * @example elementSupport.findByPartialLinkText.call(this, 'Link te').then((elem) => {... // find element by partial link text
  * @example elementSupport.findByCss.call(this, '.my-selector').then((elem) => {... // find element by CSS selector
  * @example elementSupport.findByXPath.call(this, '/html/body/article/p').then((elem) => {... // find element by XPath
  * @example elementSupport.findManyByClassName.call(this, 'my-class').then((elems) => {... // find elements by class
  * @example elementSupport.findManyByTagName.call(this, 'a').then((elems) => {... // find elements by tag name
  * @example elementSupport.findManyByLinkText.call(this, 'My link').then((elems) => {... // find elements by link text
  * @example elementSupport.findManyByPartialLinkText.call(this, 'My li').then((elems) => {... // find elements by partial link text
  * @example elementSupport.findManyByCss.call(this, '.my-class').then((elems) => {... // find elements by CSS selector
  */
const elementSupport = {
  find(obj) {
    return this.driver.find(obj);
  },

  findById(id) {
    return this.driver.findElement({ id });
  },

  findByClassName(className) {
    return this.driver.findElement({ className });
  },

  findByTagName(tagName) {
    return this.driver.findElement({ tagName });
  },

  findByName(name) {
    return this.driver.findElement({ name });
  },

  findByLinkText(linkText) {
    return this.driver.findElement({ linkText });
  },

  findByPartialLinkText(partialLinkText) {
    return this.driver.findElement({ partialLinkText });
  },

  findByCss(css) {
    return this.driver.findElement({ css });
  },

  findByXPath(xpath) {
    return this.driver.findElement({ xpath });
  },

  findManyByClassName(className) {
    return this.driver.findElements({ className });
  },

  findManyByTagName(tagName) {
    return this.driver.findElements({ tagName });
  },

  findManyByLinkText(linkText) {
    return this.driver.findElements({ linkText });
  },

  findManyByPartialLinkText(partialLinkText) {
    return this.driver.findElements({ partialLinkText });
  },

  findManyByCss(css) {
    return this.driver.findElements({ css });
  },
};

module.exports = elementSupport;
