var test = require('tape')
require('jsdom-global')()
var angular

var noop = (...args) => noop
var Controller = {}

test('angular', function (t) {
  angular = require('./index').default()
  t.end()
})

test('angular:module', function (t) {
  const module = global.angular.module('teste')
  t.ok(typeof module === typeof {
    module: noop,
    controller: noop,
    directive: noop,
    service: noop
  })
  t.end()
})

test('angular:controller', function (t) {
  const controller = global.angular.module('teste').controller('teste.controller', Controller)
  t.ok(typeof controller === typeof {
    module: noop,
    controller: noop,
    directive: noop,
    service: noop
  })
  t.end()
})

test('cleanup', function (t) {
  angular()
  t.ok(typeof global.angular === 'undefined', 'cleaned document')
  t.end()
})
