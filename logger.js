'use strict'
const chalk = require('chalk')

module.exports = {
  success (msg) {
    console.log(chalk.green.bold('[OK]'), msg)
  },
  info (msg) {
    console.log(chalk.blue.bold('[INFO]'), msg)
  },
  warning (msg) {
    console.warn(chalk.yellow.bold('[WARN]'), msg)
  },
  error (msg) {
    console.error(chalk.red.bold('[ERR]'), msg)
  }
}
