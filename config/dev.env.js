'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
console.log(process.env.PORT)
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MOCK: true
})
