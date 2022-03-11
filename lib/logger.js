require('colors');

/**
  * Logger helper
  * @access private
  */
const loggerHelper = {
  success: (msg) => {
    console.log(msg.green);
  },

  info: (msg) => {
    console.log(msg.cyan);
  },

  warning: (msg) => {
    console.log(msg.yellow);
  },

  danger: (msg) => {
    console.log(msg.red);
  },

  title: (msg) => {
    console.log(msg.underline.yellow);
  },

  lineBreak: () => {
    console.log('');
  },
};

module.exports = loggerHelper;
