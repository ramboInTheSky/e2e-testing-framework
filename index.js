'use strict';

const seleniumWebdriver = require('selenium-webdriver');
const chai = require('chai');
const api = require('./api');
const browser = require('./features/support/browser');
const element = require('./features/support/element');
const form = require('./features/support/form');
const text = require('./features/support/text');
const utility = require('./features/support/utility');

/**
  * AmidoFrontendE2EFramework
  * Public framework interface
  * All implementing parties should use the APIs provided by this interface and should *not* override them in their own code or package.json
  * @access public
  * @example const seleniumWebDriver = require('amido-frontend-e2e-framework').seleniumWebDriver;
  * @example const chai = require('amido-frontend-e2e-framework').chai;
  * @example const api = require('amido-frontend-e2e-framework').api;
  * @example const browserSupport = require('amido-frontend-e2e-framework').support.browser;
  * @example const elementSupport = require('amido-frontend-e2e-framework').support.element;
  * @example const formSupport = require('amido-frontend-e2e-framework').support.form;
  * @example const textSupport = require('amido-frontend-e2e-framework').support.text;
  * @example const utilitySupport = require('amido-frontend-e2e-framework').support.utility;
  */
const AmidoFrontendE2EFramework = {
  seleniumWebdriver,
  chai,

  api,

  support: {
    browser,
    element,
    form,
    text,
    utility,
  },
};

module.exports = AmidoFrontendE2EFramework;
