/*
 * enables angular globally.
 */

var KEYS = ['angular']

module.exports = function globalJsdom (customOptions) {
  let options = {}

  options = Object.assign(options, customOptions || {})

  // Idempotency
  if (global.navigator &&
        global.navigator.userAgent &&
        global.navigator.userAgent.indexOf('Node.js') > -1 &&
        global.document &&
        typeof global.document.destroy === 'function') {
    return global.document.destroy
  }

  var JSDOM = require('jsdom').JSDOM

  var dom = new JSDOM('', options)

  var noop = (...args) => {}

  var window = dom.window
  window.angular = window.angular || { module: noop, controller: noop, directive: noop }
  dom.angular = window.angular

  KEYS.forEach(function (key) {
    global[key] = window[key]
  })

  function cleanup () {
    KEYS.forEach(function (key) {
      delete global[key]
    })
  }

  return cleanup
}
