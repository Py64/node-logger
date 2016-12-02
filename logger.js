'use strict'
const chalk = require('chalk')

module.exports = {
  success () {
    console.log(chalk.green.bold('[OK]'), ...arguments)
  },
  info () {
    console.log(chalk.blue.bold('[INFO]'), ...arguments)
  },
  warning () {
    console.warn(chalk.yellow.bold('[WARN]'), ...arguments)
  },
  error () {
    console.error(chalk.red.bold('[ERR]'), ...arguments)
  }
}
