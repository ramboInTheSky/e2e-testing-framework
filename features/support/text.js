/**
  * Text supporting functions available for use in spec declarations
  * @access public
  * @example const textSupport = require('amido-frontend-e2e-framework').support.text;
  * @example textSupport.getText.call(this, elem).then((text) => {... // get the innerText value of an element
  */
const textSupport = {
  getText(element) {
    return element.getText();
  },
};

module.exports = textSupport;
