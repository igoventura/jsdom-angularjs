var test = require('tape')
require('jsdom-global')()
var angular

test('angular', async function (t) {
  angular = require('./index')()
  t.end()
})

test('cleanup', function (t) {
  angular()
  t.ok(typeof global.angular === 'undefined', 'cleaned document')
  t.end()
})
