/**
  * Browser supporting functions available for use in spec declarations
  * @access public
  * @example const browserSupport = require('amido-frontend-e2e-framework').support.browser;
  * @example browserSupport.getUrl.call(this, url).then()...; // go to a URL
  * @example browserSupport.getTitle.call(this).then()...; // get the browser's title
  * @example browserSupport.switchToWindow.call(this, "windowName").then()...; // switch to a window
  * @example browserSupport.switchToFrame.call(this, "frameName").then()...; // switch to a frame
  * @example browserSupport.goBack.call(this).then()...; // go back in the browser
  * @example browserSupport.goForward.call(this).then()...; // go forward in the browser
  */
const browserSupport = {
  getUrl(url) {
    return this.driver.get(url);
  },

  getTitle() {
    return this.driver.getTitle();
  },

  switchToWindow(windowName) {
    return this.driver.switchTo().window(windowName);
  },

  switchToFrame(frameName) {
    return this.driver.switchTo().frame(frameName);
  },

  goBack() {
    return this.driver.back();
  },

  goForward() {
    return this.driver.forward();
  },

  setWindowSize(height, width) {
    return this.driver.manage().window().setSize(parseInt(height, 10), parseInt(width, 10));
  },
};

module.exports = browserSupport;
