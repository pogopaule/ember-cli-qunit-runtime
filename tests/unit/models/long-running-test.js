/* globals start,stop */
import { module, test } from 'qunit';

module('long running tests');

test('3000ms', function(assert) {
  stop();
  setTimeout(function() {
    assert.ok(true);
    start();
  },3000);
});

test('2000ms', function(assert) {
  stop();
  setTimeout(function() {
    assert.ok(true);
    start();
  },2000);
});

test('1000ms', function(assert) {
  stop();
  setTimeout(function() {
    assert.ok(true);
    start();
  },1000);
});
