const element = require('./element');

/**
  * Form supporting functions available for use in spec declarations
  * @access public
  * @example const formSupport = require('amido-frontend-e2e-framework').support.form;
  * @example formSupport.inputText.call(this, 'My text', elem); // input the text into an element
  * @example formSupport.selectOptionByValueWithinElem.call(this, 'My text', elem); // select the value from a dropdown by it's value attribute
  * @example formSupport.submit.call(this, elem); // call the submit() method on the elem's closest form
  */
const formSupport = {
  inputText(text, elem) {
    return elem.sendKeys(text);
  },

  selectOptionByValueWithinElem(value, elem) {
    return elem.click()
      .then(() => {
        return elem.findElement({
          css: `option[value="${value}"]`,
        });
      })
      .then((option) => {
        return option.click();
      });
  },

  submit(elem) {
    return elem.submit();
  },
};

module.exports = formSupport;
