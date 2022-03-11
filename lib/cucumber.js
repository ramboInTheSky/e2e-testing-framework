'use strict';

const Promise = require('bluebird');
const cucumber = require('cucumber/lib/cucumber');
const CucumberHtmlReport = require('cucumber-html-report');
const logger = require('./logger');

/**
  * Cucumber helper
  * @access private
  */
const cucumberHelper = {
  run: (args, config) => {
    return new Promise((resolve, reject) => {
      cucumber.Cli(args).run((succeeded) => {
        // generate report from json if requested

        const fileName = `report-${config.fileSuffix}.html`;

        if (config.createReport && config.reportsDir) {
          new CucumberHtmlReport({
            source: `${config.reportsDir}/report-${config.fileSuffix}.json`,
            dest: config.reportsDir,
            name: fileName,
            title: config.name,
          }).createReport();

          logger.info(`Report ${fileName} generated`);
          logger.lineBreak();
        }

        if (succeeded) {
          return resolve();
        }

        return reject();
      });
    });
  },
};

module.exports = cucumberHelper;
