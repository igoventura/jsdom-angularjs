/*
 * enables angular globally.
 */
declare var global: any;

export default function globalJsdom(customOptions: any) {
  var KEYS = ["angular"];
  let options = {};

  options = Object.assign(options, customOptions || {});

  // Idempotency
  if (
    global.navigator &&
    global.navigator.userAgent &&
    global.navigator.userAgent.indexOf("Node.js") > -1 &&
    global.document &&
    typeof global.document.destroy === "function"
  ) {
    return global.document.destroy;
  }

  var JSDOM = require("jsdom").JSDOM;

  var dom = new JSDOM("", options);

  var noop: any = (...args) => ({
    module: noop,
    controller: noop,
    directive: noop,
    service: noop
  });

  var window = dom.window;
  window.angular = noop();

  dom.angular = window.angular;

  KEYS.forEach(function(key) {
    global[key] = window[key];
  });

  function cleanup() {
    KEYS.forEach(function(key) {
      delete global[key];
    });
  }

  return cleanup;
}
